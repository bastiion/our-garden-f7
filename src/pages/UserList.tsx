import { gql, useQuery } from '@apollo/client'
import { Card, Input } from 'framework7-react'
import React, { useState } from 'react'

import { _UserOrdering, QueryUserArgs, User } from '../types/graphql'

interface GetUserData {
  User: User[];
}

const GET_USER = gql`
  query usersPaginateQuery(
    $first: Int
    $offset: Int
    $orderBy: [_UserOrdering]
    $filter: _UserFilter
  ) {
    User(first: $first, offset: $offset, orderBy: $orderBy, filter: $filter) {
      userId
      name
      avgStars
      numReviews
    }
  }
`
export const UserList: React.FC = () => {
  const [order, setOrder] = useState<'asc' | 'desc'>( 'asc' )
  const [orderBy, setOrderBy] = useState( 'name' )
  const [page] = useState( 0 )
  const [rowsPerPage] = useState( 10 )
  const [filterState, setFilterState] = useState( { usernameFilter: '' } )

  const getFilter = () => {
    return filterState.usernameFilter.length > 0
      ? { name_contains: filterState.usernameFilter }
      : {}
  }

  const { loading, data, error } = useQuery<GetUserData, QueryUserArgs>(
    GET_USER,
    {
      variables: {
        first: rowsPerPage,
        offset: rowsPerPage * page,
        orderBy: [( orderBy + '_' + order ) as _UserOrdering],
        filter: getFilter(),
      },
    }
  )

  const handleSortRequest = ( property: any ) => {
    const newOrderBy = property
    let newOrder: 'asc' | 'desc' = 'desc'

    if ( orderBy === property && order === 'desc' ) {
      newOrder = 'asc'
    }

    setOrder( newOrder )
    setOrderBy( newOrderBy )
  }

  const handleFilterChange = ( filterName: any ) => ( event: any ) => {
    const val = event.target.value

    setFilterState(( oldFilterState ) => ( {
      ...oldFilterState,
      [filterName]: val,
    } ))
  }

  return (
    <div>
      <Input
        placeholder="Username"
        value={filterState.usernameFilter}
        onChange={handleFilterChange}
      />
      {loading && !error && <p>Loading...</p>}
      {error && !loading && <p>Error</p>}
      {data && !loading && !error && (
        <Card className="data-table">
          <table>
            <thead>
              <tr>
                <th
                  onClick={() => handleSortRequest( 'name' )}
                  className="label-cell"
                >
                  Name
                </th>
                <th
                  onClick={() => handleSortRequest( 'avgStars' )}
                  className="numeric-cell"
                >
                  Average Stars
                </th>
                <th
                  onClick={() => handleSortRequest( 'numReviews' )}
                  className="numeric-cell"
                >
                  Reviews
                </th>
              </tr>
            </thead>
            <tbody>
              {data.User.map(( n ) => {
                return (
                  <tr key={n.userId}>
                    <td className="label-cell">{`${n.name}`}</td>
                    <td className="numeric-cell">
                      {n.avgStars ? n.avgStars.toFixed( 2 ) : '-'}
                    </td>
                    <td className="numeric-cell">{n.numReviews}</td>
                  </tr>
                )
              } )}
            </tbody>
          </table>
        </Card>
      )}
    </div>
  )
}
