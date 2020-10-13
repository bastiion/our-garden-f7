// Import React and ReactDOM
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {ApolloClient, InMemoryCache} from '@apollo/client'
import {ApolloProvider} from '@apollo/client'

const uri = process.env.REACT_APP_GRAPHQL_URI || 'http://localhost:4001/graphql'
const cache = new InMemoryCache()

const client = new ApolloClient({
    uri,
    cache
})

// Import Framework7
import Framework7 from 'framework7/framework7-lite.esm.bundle.js'

// Import Framework7-React Plugin
import Framework7React from 'framework7-react'

// Import Framework7 Styles
import 'framework7/css/framework7.bundle.css'

// Import Icons and App Custom Styles
import '../css/icons.css'
import '../css/app.scss'

// Import App Component
import App from '../components/app'

// Init F7 React Plugin
Framework7.use(Framework7React)

// Mount React App
ReactDOM.render(
    <ApolloProvider client={client}>
        <App/>
    </ApolloProvider>,
    document.getElementById('app'),
)
