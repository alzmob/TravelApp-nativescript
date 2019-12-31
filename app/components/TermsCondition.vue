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
      <Label class="action-bar-title" text="Terms and Conditions"></Label>
    </ActionBar>

    <ScrollView orientation="vertical">
      <StackLayout class="m-t-10">
        <Image class="m-b-30 m-x-20" horizontalAlignment="center" src="~/images/logo.png"></Image>
        
        <Label :text="content" textWrap="true" class="h4 m-x-20"/>
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
import * as utils from "~/shared/utils";
import SelectedPageService from "~/shared/selected-page-service";
import terms from "~/services/localdata/terms.json";

export default {
  data() {
    return {
      content: terms.content
    }
  },
  mounted() {
    SelectedPageService.getInstance().updateSelectedPage("TermsCondition");
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
