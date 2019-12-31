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
      <Label class="action-bar-title" text="Settings"></Label>
    </ActionBar>

    <ScrollView orientation="vertical">
      <StackLayout class="m-t-10">
        <GridLayout rows="*" columns="*, auto" class="m-x-10">
          <Label class="h3 bg-danger text-vcenter" lineHeight="50" text="Push Notification bg-danger" col="0"/>
          <Switch checked="true" col="1"/>
        </GridLayout>
        <StackLayout class="hr"/>
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
import * as utils from "~/shared/utils";
import SelectedPageService from "~/shared/selected-page-service";

export default {
  mounted() {
    SelectedPageService.getInstance().updateSelectedPage("Settings");
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
