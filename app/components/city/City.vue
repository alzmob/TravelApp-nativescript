<template>
  <Page class="page">
    <ActionBar class="action-bar">
      <NavigationButton ios:visibility="collapsed" android.systemIcon="ic_menu_back" @tap="onBack" />
      <Label class="action-bar-title" :text="'Cities in ' + country.name"></Label>
    </ActionBar>

    <ScrollView orientation="vertical">
      <StackLayout class="m-t-5">
        <SearchBar hint="Type city name" v-model="searchQuery" @textChange="onSearchChanged" />
        <CityItem v-for="item in items" :key="item.id" :data="item" @tap="onItemTap" />
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
import CityDetails from "./CityDetails";
import CityItem from "./CityItem";

export default {
  props: {
    country: {}
  },
  data() {
    return {
      searchQuery: "",
      items: [],
    };
  },
  components: {
    CityItem: CityItem
  },
  async mounted() {
    this.items = await this.$backendService.getCityList(this.country.id);
    this.$forceUpdate();
  },
  computed: {},
  methods: {
    onBack() {
      this.$navigateBack();
    },
    onSearchChanged() {},
    onItemTap(item) {
      this.$navigateTo(CityDetails, {
        props: {
          country: this.country,
          city: item
        }
      });
    }
  }
};
</script>