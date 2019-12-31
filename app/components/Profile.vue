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
      <Label class="action-bar-title" text="Profile"></Label>
    </ActionBar>

    <ScrollView orientation="vertical">
      <StackLayout class="m-t-10 m-x-20">
				<Image class="nt-drawer__header-image fas t-36 m-y-20" src.decode="font://&#xf2bd;"></Image>

        <Label class="h3" text="UserName"/>
        <Label class="h3" text="Michle Johnson"/>

        <Label class="h3" text="Email"/>
        <Label class="h3" text="johnson999@gmail.com"/>
        
        <Button class="-primary" text="Change Password"/>
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
import * as utils from "~/shared/utils";
import SelectedPageService from "~/shared/selected-page-service";

export default {
  mounted() {
    SelectedPageService.getInstance().updateSelectedPage("Profile");
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
