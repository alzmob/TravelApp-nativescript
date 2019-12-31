
import { getRootView } from "tns-core-modules/application"
import GlobalStore from '../services/GlobalStore';

export const showDrawer = () => {
  let drawerNativeView = getRootView();
  if (drawerNativeView && drawerNativeView.showDrawer) {
    drawerNativeView.showDrawer();
  }
}

export const closeDrawer = () => {
  let drawerNativeView = getRootView();
  if (drawerNativeView && drawerNativeView.showDrawer) {
    drawerNativeView.closeDrawer();
  }
}

export const alert = (message) => {
  return alert({
    title: GlobalStore.appName,
    okButtonText: "OK",
    message: message
  });
}