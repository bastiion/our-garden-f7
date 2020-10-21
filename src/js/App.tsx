// Import React and ReactDOM
// Import Framework7 Styles
import 'framework7/css/framework7.bundle.css'
// Import Icons and App Custom Styles
import '../css/icons.css'
import '../css/app.scss'

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
// Import Framework7-React Plugin
import Framework7React from 'framework7-react'
// Import Framework7
import Framework7 from 'framework7/framework7-lite.esm.bundle.js'
import * as React from 'react'
import * as ReactDOM from 'react-dom'

// Import App Component
import App from '../components/app'

const uri =
  process.env.REACT_APP_GRAPHQL_URI || 'http://localhost:4001/graphql'
const cache = new InMemoryCache()

export const client = new ApolloClient( {
  uri,
  cache,
} )

// Init F7 React Plugin
Framework7.use( Framework7React )

// Mount React App
ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById( 'app' )
)
