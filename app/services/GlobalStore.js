import Vue from "nativescript-vue";

const GlobalStore = new Vue({
  data: {
    appName: "TravelApp",
    isLogin: false
  }
});

export default GlobalStore;