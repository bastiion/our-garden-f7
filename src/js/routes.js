import NotFoundPage from '../pages/404.jsx'
import AboutPage from '../pages/about.jsx'
import CatalogPage from '../pages/catalog.jsx'
import DynamicRoutePage from '../pages/dynamic-route.jsx'
import FormPage from '../pages/form.jsx'
import HomePage from '../pages/home.tsx'
import ProductPage from '../pages/product.jsx'
import RequestAndLoad from '../pages/request-and-load.jsx'
import SettingsPage from '../pages/settings.jsx'

const routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/about/',
    component: AboutPage,
  },
  {
    path: '/form/',
    component: FormPage,
  },
  {
    path: '/catalog/',
    component: CatalogPage,
  },
  {
    path: '/product/:id/',
    component: ProductPage,
  },
  {
    path: '/settings/',
    component: SettingsPage,
  },

  {
    path: '/dynamic-route/blog/:blogId/post/:postId/',
    component: DynamicRoutePage,
  },
  {
    path: '/request-and-load/user/:userId/',
    async: function ( routeTo, routeFrom, resolve/*, reject*/ ) {
      // App instance
      const app = this.app

      // Show Preloader
      app.preloader.show()

      // User ID from request
      //const userId = routeTo.params.userId

      // Simulate Ajax Request
      setTimeout( function () {
        // We got user data from request
        const user = {
          firstName: 'Vladimir',
          lastName: 'Kharlampidi',
          about: 'Hello, i am creator of Framework7! Hope you like it!',
          links: [
            {
              title: 'Framework7 Website',
              url: 'http://framework7.io',
            },
            {
              title: 'Framework7 Forum',
              url: 'http://forum.framework7.io',
            },
          ],
        }
        // Hide Preloader
        app.preloader.hide()

        // Resolve route to load page
        resolve(
          {
            component: RequestAndLoad,
          },
          {
            context: {
              user: user,
            },
          }
        )
      }, 1000 )
    },
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
]

export default routes
