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
      <Label class="action-bar-title" text="City"></Label>
    </ActionBar>

    <ScrollView orientation="vertical">
      <StackLayout class="m-t-5">
        <SearchBar hint="Type country name" v-model="searchQuery" @textChange="onSearchChanged" />
        <CountryItem v-for="item in items" v-bind:key="item.id" :data="item" @tap="onItemTap"/>
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
import * as utils from "~/shared/utils";
import SelectedPageService from "~/shared/selected-page-service";
import CountryItem from "./CountryItem";
import City from "./City";

export default {
  data() {
    return {
      searchQuery: "",
      items: []
    };
  },
  components: {
    CountryItem: CountryItem
  },
  async mounted() {
    SelectedPageService.getInstance().updateSelectedPage("City");
    this.items = await this.$backendService.getCountryList();
    this.$forceUpdate();
  },
  computed: {},
  methods: {
    onDrawerButtonTap() {
      utils.showDrawer();
    },
    onSearchChanged() {
    },
    onItemTap(item) {
      this.$navigateTo(City, {
        props: {
          country: item
        }
      });
    }
  }
};
</script>