import {
  App,
  Block,
  BlockFooter,
  Link,
  List,
  ListButton,
  ListInput,
  LoginScreen,
  LoginScreenTitle,
  Navbar,
  NavRight,
  Page,
  Panel,
  Popup,
  Toolbar,
  View,
  Views,
} from 'framework7-react'
import { Framework7Params } from 'framework7/components/app/app-class'
import { Device } from 'framework7/framework7-lite.esm.bundle.js'
import * as React from 'react'

import cordovaApp from '../js/cordova-app'
import routes from '../js/routes'

export default class extends React.Component<
  any,
  { f7params: Framework7Params; username: string; password: string }
> {
  constructor( props: any ) {
    super( props )

    this.state = {
      // Framework7 Parameters
      f7params: {
        id: 'io.github.communitygarden.ourgarden', // App bundle ID
        name: 'Our Garden', // App name
        theme: 'auto', // Automatic theme detection

        // App root data
        data() {
          return {
            // Demo products for Catalog section
            products: [
              {
                id: '1',
                title: 'Apple iPhone 8',
                description:
                  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi tempora similique reiciendis, error nesciunt vero, blanditiis pariatur dolor, minima sed sapiente rerum, dolorem corrupti hic modi praesentium unde saepe perspiciatis.',
              },
              {
                id: '2',
                title: 'Apple iPhone 8 Plus',
                description:
                  'Velit odit autem modi saepe ratione totam minus, aperiam, labore quia provident temporibus quasi est ut aliquid blanditiis beatae suscipit odio vel! Nostrum porro sunt sint eveniet maiores, dolorem itaque!',
              },
              {
                id: '3',
                title: 'Apple iPhone X',
                description:
                  'Expedita sequi perferendis quod illum pariatur aliquam, alias laboriosam! Vero blanditiis placeat, mollitia necessitatibus reprehenderit. Labore dolores amet quos, accusamus earum asperiores officiis assumenda optio architecto quia neque, quae eum.',
              },
            ],
          }
        },

        // App routes
        routes,

        // Register service worker
        serviceWorker: Device.cordova
          ? {}
          : {
              path: '/service-worker.js',
            },
        // Input settings
        input: {
          scrollIntoViewOnFocus: Device.cordova && !Device.electron,
          scrollIntoViewCentered: Device.cordova && !Device.electron,
        },
        // Cordova Statusbar settings
        statusbar: {
          iosOverlaysWebView: true,
          androidOverlaysWebView: false,
        },
      },
      // Login screen demo data
      username: '',
      password: '',
    }
  }
  render() {
    return (
      <App params={this.state.f7params}>
        {/* Left panel with cover effect*/}
        <Panel left cover themeDark>
          <View>
            <Page>
              <Navbar title="Left Panel" />
              <Block>Left panel content goes here</Block>
            </Page>
          </View>
        </Panel>

        {/* Right panel with reveal effect*/}
        <Panel right reveal themeDark>
          <View>
            <Page>
              <Navbar title="Right Panel" />
              <Block>Right panel content goes here</Block>
            </Page>
          </View>
        </Panel>

        {/* Views/Tabs container */}
        <Views tabs className="safe-areas">
          {/* Tabbar for switching views-tabs */}
          <Toolbar tabbar labels bottom>
            <Link
              tabLink="#view-home"
              tabLinkActive
              iconIos="f7:house_fill"
              iconAurora="f7:house_fill"
              iconMd="material:home"
              text="Home"
            />
            <Link
              tabLink="#view-catalog"
              iconIos="f7:square_list_fill"
              iconAurora="f7:square_list_fill"
              iconMd="material:view_list"
              text="Catalog"
            />
            <Link
              tabLink="#view-settings"
              iconIos="f7:gear"
              iconAurora="f7:gear"
              iconMd="material:settings"
              text="Settings"
            />
          </Toolbar>

          {/* Your main view/tab, should have "view-main" class. It also has "tabActive" prop */}
          <View id="view-home" main tab tabActive url="/" />

          {/* Catalog View */}
          <View id="view-catalog" name="catalog" tab url="/catalog/" />

          {/* Settings View */}
          <View id="view-settings" name="settings" tab url="/settings/" />
        </Views>

        {/* Popup */}
        <Popup id="my-popup">
          <View>
            <Page>
              <Navbar title="Popup">
                <NavRight>
                  <Link popupClose>Close</Link>
                </NavRight>
              </Navbar>
              <Block>
                <p>Popup content goes here.</p>
              </Block>
            </Page>
          </View>
        </Popup>

        <LoginScreen id="my-login-screen">
          <View>
            <Page loginScreen>
              <LoginScreenTitle>Login</LoginScreenTitle>
              <List form>
                <ListInput
                  type="text"
                  name="username"
                  placeholder="Your username"
                  value={this.state.username}
                  onInput={( e ) => this.setState( { username: e.target.value } )}
                />
                <ListInput
                  type="password"
                  name="password"
                  placeholder="Your password"
                  value={this.state.password}
                  onInput={( e ) => this.setState( { password: e.target.value } )}
                />
              </List>
              <List>
                <ListButton
                  title="Sign In"
                  onClick={() => this.alertLoginData()}
                />
                <BlockFooter>
                  Some text about login information.
                  <br />
                  Click "Sign In" to close Login Screen
                </BlockFooter>
              </List>
            </Page>
          </View>
        </LoginScreen>
      </App>
    )
  }
  alertLoginData() {
    this.$f7.dialog.alert(
      'Username: ' +
        this.state.username +
        '<br>Password: ' +
        this.state.password,
      () => {
        this.$f7.loginScreen.close()
      }
    )
  }
  componentDidMount() {
    this.$f7ready(( f7 ) => {
      // Init cordova APIs (see cordova-app.js)
      if ( Device.cordova ) {
        cordovaApp.init( f7 )
      }
      // Call F7 APIs here
    } )
  }
}
