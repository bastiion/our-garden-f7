import { Block,Navbar, Page } from 'framework7-react'
import React from 'react'

export default () => (
  <Page>
    <Navbar title="Not found" backLink="Back" />
    <Block strong>
      <p>Sorry</p>
      <p>Requested content not found.</p>
    </Block>
  </Page>
)
