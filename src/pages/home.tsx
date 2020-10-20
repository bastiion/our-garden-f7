import * as React from 'react'
import {
  Page,
  Navbar,
  NavLeft,
  NavTitle,
  NavTitleLarge,
  NavRight,
  Link,
  Toolbar,
  Block,
  BlockTitle,
  List,
  ListItem,
  Row,
  Col,
  Button
} from 'framework7-react'
import { UserList } from './UserList'
import { hot } from 'react-hot-loader'

const Home = () => (
  <Page name="home">
    {/* Top Navbar */}
    <Navbar large sliding={false}>
      <NavLeft>
        <Link iconIos="f7:menu" iconAurora="f7:menu" iconMd="material:menu" panelOpen="left" />
      </NavLeft>
      <NavTitle sliding>Our Garden - Wurzelwerk</NavTitle>
      <NavRight>
        <Link iconIos="f7:menu" iconAurora="f7:menu" iconMd="material:menu" panelOpen="right" />
      </NavRight>
      <NavTitleLarge>Wurzelwerk</NavTitleLarge>
    </Navbar>

    {/* Page content */}
    <Block strong>
      <p>Das 16. Wurzelwerk begrüßt dich und heißt dich WIllkommen in der digitalen Garten-Verwaltung</p>
        <p>Vielfalt, eine gute Ernte und Frohes Gärtnern!</p>
    </Block>
    <BlockTitle>Users</BlockTitle>
      <Block strong>
          <UserList/>
      </Block>

    <BlockTitle>Modals</BlockTitle>
    <Block strong>
      <Row>
        <Col width="50">
          <Button fill raised popupOpen="#my-popup">Popup</Button>
        </Col>
        <Col width="50">
          <Button fill raised loginScreenOpen="#my-login-screen">Login Screen</Button>
        </Col>
      </Row>
    </Block>

    <List>
      <ListItem
        title="Dynamic (Component) Route"
        link="/dynamic-route/blog/45/post/125/?foo=bar#about"
      />
      <ListItem
        title="Default Route (404)"
        link="/load-something-that-doesnt-exist/"
      />
      <ListItem
        title="Request Data & Load"
        link="/request-and-load/user/123456/"
      />
    </List>
  </Page>
)
declare let module: Record<string, unknown>

export default hot(module)(Home)
