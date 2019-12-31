// The following is a sample implementation of a backend service using Progress Kinvey (https://www.progress.com/kinvey).
// Feel free to swap in your own service / APIs / etc here for your own apps.

// import * as Kinvey from "kinvey-nativescript-sdk";

// Kinvey.init({
//     appKey: "kid_SyY8LYO8M",
//     appSecret: "09282985d7c540f7b076a9c7fd884c77"
// });
import GlobalStore from './GlobalStore';
import countrydata from './localdata/country.json';
import citydata from './localdata/city.json';
import flightdata from './localdata/flight.json';
import hoteldata from './localdata/hotel.json';

export default class BackendService {
  isLoggedIn() {
    return GlobalStore.isLogin;
    // return !!Kinvey.User.getActiveUser();
  }

  login(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        GlobalStore.isLogin = true;
        resolve();
      }, 100);
    });
    // return Kinvey.User.login(user.email, user.password);
  }

  logout() {
    return new Promise((resolve, reject) => {
      GlobalStore.isLogin = false;
      resolve();
    });
    // return Kinvey.User.logout();
  }

  register(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        GlobalStore.isLogin = true;
        resolve();
      }, 100);
    });
    // return Kinvey.User.signup({ username: user.email, password: user.password });
  }

  getCountryList() {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(countrydata), 500);
    })
  }

  getCityList(countryId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(citydata), 500);
    })
  }

  getFlightList(cityId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(flightdata), 500);
    })
  }

  getHotelList(cityId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(hoteldata), 500);
    })
  }
}