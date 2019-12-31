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
      <Label class="action-bar-title" text="Hotels"></Label>
    </ActionBar>

    <ScrollView orientation="vertical">
      <StackLayout class="m-t-5">
        <SearchBar hint="Search for hotels" v-model="searchQuery" @textChange="onSearchChanged" />
        <HotelItem v-for="item in items" v-bind:key="item.id" :data="item" @tap="onItemTap"/>
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
import * as utils from "~/shared/utils";
import SelectedPageService from "~/shared/selected-page-service";
import HotelItem from "./HotelItem";
import HotelDetails from "./HotelDetails";

export default {
  data() {
    return {
      searchQuery: "",
      items: []
    };
  },
  components: {
    HotelItem
  },
  async mounted() {
    SelectedPageService.getInstance().updateSelectedPage("Hotel");
    this.items = await this.$backendService.getHotelList();
  },
  computed: {},
  methods: {
    onDrawerButtonTap() {
      utils.showDrawer();
    },
    onSearchChanged() {
    },
    onItemTap(item) {
      this.$navigateTo(HotelDetails, {
        props: {
          data: item
        }
      });
    }
  }
};
</script>