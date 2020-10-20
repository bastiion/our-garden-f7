// Import Framework7
import Framework7 from 'framework7/framework7-lite.esm.bundle.js'

// Import Framework7-React Plugin
import Framework7React from 'framework7-react'

// Import Framework7 Styles
import 'framework7/css/framework7.bundle.css'

// Import Icons and App Custom Styles
import '../src/css/icons.css'
import '../src/css/app.scss'

// Import App Component

// Init F7 React Plugin
Framework7.use(Framework7React)

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}
