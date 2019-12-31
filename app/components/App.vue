<template lang="html">
  <RadSideDrawer ref="drawer" drawerLocation="Left" v-bind:gesturesEnabled="GlobalStore.isLogin" :drawerTransition="transition">
    <StackLayout ~drawerContent backgroundColor="#ffffff">
      <slot name="drawerContent"></slot>
    </StackLayout>
    <Frame ~mainContent ref="drawerMainContent">
      <slot name="mainContent"></slot>
    </Frame>
  </RadSideDrawer>
</template>

<script>
import { SlideInOnTopTransition } from "nativescript-ui-sidedrawer";
import GlobalStore from "~/services/GlobalStore";

export default {
  data() {
    return {
      GlobalStore,
      transition: new SlideInOnTopTransition()
    };
  },
  methods: {
  }
};
</script>

<style scoped lang="scss">
// Start custom common variables
@import "~@nativescript/theme/scss/variables/blue";
// End custom common variables

// Custom styles
</style>
