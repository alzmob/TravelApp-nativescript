import Vue from "nativescript-vue";
import * as platform from 'platform';
if (platform.isIOS) {
  GMSServices.provideAPIKey("AIzaSyA5FWMYmB575N_BA_2WeAFK5lGfNufRJ8c")
}

import App from "./components/App";
import Login from "./components/auth/Login";
import Vacation from "./components/Vacation";
import DrawerContent from "./components/DrawerContent";

import BackendService from "./services/BackendService";

import RadSideDrawer from "nativescript-ui-sidedrawer/vue";
// import { CardView } from "@nstudio/nativescript-cardview";

Vue.use(RadSideDrawer);
// Vue.use(CardView);
Vue.registerElement('CardView', () => require('@nstudio/nativescript-cardview').CardView);
Vue.registerElement('MapView', () => require('nativescript-google-maps-sdk').MapView);

const backendService = new BackendService();
Vue.prototype.$backendService = backendService;

Vue.config.silent = (TNS_ENV === 'production');

new Vue({
  render(h) {
    return h(
      App,
      [
        h(DrawerContent, { slot: 'drawerContent' }),
        h(backendService.isLoggedIn() ? Vacation : Login, { slot: 'mainContent' })
      ]
    );
  }
}).$start();
