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
      <Label class="action-bar-title" text="Flights"></Label>
    </ActionBar>

    <ScrollView orientation="vertical">
      <StackLayout class="m-t-5">
        <SearchBar hint="Search for flights" v-model="searchQuery" @textChange="onSearchChanged" />
        <FlightItem v-for="item in items" v-bind:key="item.id" :data="item" @tap="onItemTap"/>
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
import * as utils from "~/shared/utils";
import SelectedPageService from "~/shared/selected-page-service";
import FlightItem from "./FlightItem";
import FlightDetails from "./FlightDetails";

export default {
  data() {
    return {
      searchQuery: "",
      items: []
    };
  },
  components: {
    FlightItem: FlightItem
  },
  async mounted() {
    SelectedPageService.getInstance().updateSelectedPage("Flight");
    this.items = await this.$backendService.getFlightList();
  },
  computed: {},
  methods: {
    onDrawerButtonTap() {
      utils.showDrawer();
    },
    onSearchChanged() {
    },
    onItemTap(item) {
      this.$navigateTo(FlightDetails, {
        props: {
          data: item
        }
      });
    }
  }
};
</script>