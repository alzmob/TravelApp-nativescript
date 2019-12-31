<template>
  <Page class="page">
    <ActionBar class="action-bar">
      <NavigationButton ios:visibility="collapsed" android.systemIcon="ic_menu_back" @tap="onBack" />
      <Label class="action-bar-title" :text="`Flight - ${data.name}`"></Label>
    </ActionBar>

    <ScrollView orientation="vertical">
      <StackLayout>
        <Image :src="imageSource" height="250" stretch="aspectFit" class="m-b-10" />

        <StackLayout class="m-x-20">
          <Label :text="data.name" class="h2" />

          <StackLayout orientation="horizontal">
            <Label text.decode="&#xf53d;" class="nt-icon fas m-r-5 h3 text-primary"></Label>
            <label :text="`$ ${data.price}`" class="h3 font-weight-bold" textWrap="true" />
          </StackLayout>

          <StackLayout orientation="horizontal">
            <Label text.decode="&#xf5b0;" class="nt-icon fas m-r-5 h3 text-primary"></Label>
            <label :text="data.from" class="h3 font-weight-bold" textWrap="true" />
          </StackLayout>

          <StackLayout orientation="horizontal">
            <Label text.decode="&#xf5af;" class="nt-icon fas m-r-5 h3 text-primary"></Label>
            <label :text="data.to" class="h3 font-weight-bold" textWrap="true" />
          </StackLayout>
        </StackLayout>

        <StackLayout class="hr" />

        <StackLayout>
          <Label text="Timetable" class="h2 m-x-20" />

          <GridLayout :rows="timeTableRows" columns="*, *">
            <Label text="Departure" class="h3 bg-primary p-l-20" row="0" col="0" />
            <Label text="Arrival" class="h3 bg-primary p-r-20" row="0" col="1" />

            <Label
              v-for="(item, index) in data.schedule"
              v-bind:key="index"
              :text="item.departure"
              class="h3 p-l-20"
              :row="index + 1"
              col="0"
            />
            <Label
              v-for="(item, index) in data.schedule"
              v-bind:key="index"
              :text="item.arrival"
              class="h3 p-r-20"
              :row="index + 1"
              col="1"
            />
          </GridLayout>
        </StackLayout>

        <Button text="ORDER" class="-primary"/>
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
import { ImageSource } from "@nativescript/core/image-source";

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
    }
  }
};
</script>