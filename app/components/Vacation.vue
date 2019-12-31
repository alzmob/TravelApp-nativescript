<template>
  <Page class="page">
    <ActionBar class="action-bar">
      <NavigationButton ios:visibility="collapsed" icon="res://menu" @tap="onDrawerButtonTap"></NavigationButton>
      <ActionItem
        icon="res://menu"
        android:visibility="collapsed"
        @tap="onDrawerButtonTap"
        ios.position="left"
      ></ActionItem>
      <Label class="action-bar-title" text="Vacation"></Label>
    </ActionBar>

    <StackLayout row="1" class="m-t-5">
      <Label class="h3 font-weight-bold m-x-20 m-b-3" text="Cities"/>
    </StackLayout>
  </Page>
</template>

<script>
import * as utils from "~/shared/utils";
import SelectedPageService from "~/shared/selected-page-service";

export default {
  mounted() {
    SelectedPageService.getInstance().updateSelectedPage("Vacation");
  },
  computed: {
  },
  methods: {
    onDrawerButtonTap() {
      utils.showDrawer();
    }
  }
};
</script>