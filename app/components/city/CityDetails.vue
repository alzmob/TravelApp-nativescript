<template>
  <Page class="page">
    <ActionBar class="action-bar">
      <NavigationButton ios:visibility="collapsed" android.systemIcon="ic_menu_back" @tap="onBack" />
      <Label class="action-bar-title" :text="`${city.name} in ${country.name}`"></Label>
    </ActionBar>

    <ScrollView orientation="vertical">
      <StackLayout>
        <Image :src="imageSource" height="250" stretch="aspectFill" class="m-b-10" />

        <StackLayout class="m-x-20">
          <StackLayout orientation="horizontal">
            <Label col="0" text.decode="&#xf594;" class="nt-icon fas h2 m-r-5 text-primary"></Label>
            <Label col="1" :text="`${city.hotelCount}+`" class="p-r-10 h3"></Label>
          </StackLayout>

          <StackLayout orientation="horizontal">
            <Label col="0" text.decode="&#xf5b0;" class="nt-icon fas h2 m-r-5 text-primary"></Label>
            <Label col="1" :text="city.flight" class="p-r-10 h3"></Label>
          </StackLayout>

          <Label text="About" class="h2" />
          <Label :text="city.description" textWrap="true" class="h3" />
        </StackLayout>

        <Label text="Hotels" class="h2 m-x-20" />

        <Label text="Location" class="h2 m-x-20" />

        <MapView
          height="300"
          :zoom="10"
          :latitude="city.location.latitude"
          :longitude="city.location.longitude"
          compassEnabled="true"
          scrollGesturesEnabled="true"
          tiltGesturesEnabled="true"
          zoomGesturesEnabled="true"
          @mapReady="mapReady"
        />
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
import { ImageSource } from "@nativescript/core/image-source";
import * as mapsModule from "nativescript-google-maps-sdk";

export default {
  props: {
    country: {},
    city: {}
  },
  data() {
    return {
      imageSource: "~/images/logo.png"
    };
  },
  components: {},
  async mounted() {
    ImageSource.fromUrl(this.city.image).then(source => {
      this.imageSource = source;
      this.$forceUpdate();
    });
  },
  computed: {},
  methods: {
    onBack() {
      this.$navigateBack();
    },
    mapReady(args) {
      var mapView = args.object;

      var { location, name } = this.city;
      var marker = new mapsModule.Marker();
      marker.position = mapsModule.Position.positionFromLatLng(
        location.latitude,
        location.longitude
      );
      marker.title = name;
      marker.snippet = this.country.name;
      marker.userData = { index: 1 };
      mapView.addMarker(marker);
    }
  }
};
</script>