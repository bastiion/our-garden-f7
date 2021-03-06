import { List, ListItem,Navbar, Page } from 'framework7-react'
import React from 'react'

export default class extends React.Component {
  constructor() {
    super()

    this.state = {
      products: this.$f7.data.products,
    }
  }
  render() {
    return (
      <Page name="catalog">
        <Navbar title="Catalog" />
        <List>
          {this.state.products.map(( product ) => (
            <ListItem
              key={product.id}
              title={product.title}
              link={`/product/${product.id}/`}
            />
          ))}
        </List>
      </Page>
    )
  }
}
