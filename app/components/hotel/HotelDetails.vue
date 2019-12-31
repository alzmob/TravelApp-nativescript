<template>
  <Page class="page">
    <ActionBar class="action-bar">
      <NavigationButton ios:visibility="collapsed" android.systemIcon="ic_menu_back" @tap="onBack" />
      <Label class="action-bar-title" :text="`Hotel - ${data.name}`"></Label>
    </ActionBar>

    <ScrollView orientation="vertical">
      <StackLayout>
        <Image :src="imageSource" height="250" stretch="aspectFill" class="m-b-10" />

        <StackLayout class="m-x-20">
          <Label :text="data.name" class="h2" />
          <Label :text="data.title" class="h3" />

          <StackLayout orientation="horizontal">
            <Label text.decode="&#xf3c5;" class="nt-icon fas h2 m-r-5 m-l-2 text-primary"></Label>
            <label :text="data.address" class="h3 font-weight-bold"/>
          </StackLayout>

          <StackLayout orientation="horizontal">
            <Label text.decode="&#xf879;" class="nt-icon fas h2 m-r-5 text-primary"></Label>
            <label :text="data.contact" class="h3 font-weight-bold"/>
          </StackLayout>

          <StackLayout orientation="horizontal">
            <Label text.decode="&#xf155;" class="nt-icon fas m-x-5 h2 text-primary"></Label>
            <label :text="`$ ${data.price}`" class="h3 font-weight-bold" textWrap="true" />
          </StackLayout>
        </StackLayout>

        <Label :text="data.description" class="h3 m-x-20" textWrap="true"/>

        <Button text="ORDER" class="-primary"/>

        <MapView
          height="300"
          :zoom="15"
          :latitude="data.location.latitude"
          :longitude="data.location.longitude"
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
    data: {}
  },
  data() {
    return {
      imageSource: "~/images/logo.png"
    };
  },
  components: {},
  async mounted() {
    ImageSource.fromUrl(this.data.image).then(source => {
      this.imageSource = source;
      this.$forceUpdate();
    });
  },
  computed: {
    timeTableRows() {
      var rowsString = "auto";
      this.data.schedule.forEach((item, index) => {
        rowsString += `,auto`;
      });
      return rowsString;
    }
  },
  methods: {
    onBack() {
      this.$navigateBack();
    },
    mapReady(args) {
      var mapView = args.object;

      var { location, name, address } = this.data;
      var marker = new mapsModule.Marker();
      marker.position = mapsModule.Position.positionFromLatLng(
        location.latitude,
        location.longitude
      );
      marker.title = name;
      marker.snippet = address;
      marker.userData = { index: 1 };
      mapView.addMarker(marker);
    }
  }
};
</script>