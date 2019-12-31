<template>
  <StackLayout>
    <card-view margin="5 0" elevation="40" radius="5" @tap="onItemTap">
      <GridLayout :height="height" rows="auto, auto, auto" :columns="height + ', *, auto'" class="m-10">
        <Image :src="data.imageSource" stretch="aspectFit" rowSpan="4" col="0" class="fas m-r-10"/>
        <label :text="data.name" class="h2 font-weight-bold" textWrap="true" row="0" col="1" />
        
        <StackLayout row="0" col="2" orientation="horizontal">
          <Label text.decode="&#xf155;" class="nt-icon fas m-r-5 text-primary"></Label>
          <label :text="data.price" class="h4 text-primary font-weight-bold" textWrap="true"/>
        </StackLayout>
        
        <StackLayout row="1" col="1" orientation="horizontal">
          <Label text.decode="&#xf5b0;" class="nt-icon fas m-r-5 h3 text-primary"></Label>
          <label :text="data.from" class="h3 font-weight-bold" textWrap="true"/>
        </StackLayout>

        <StackLayout row="2" col="1" orientation="horizontal">
          <Label text.decode="&#xf5af;" class="nt-icon fas m-r-5 h3 text-primary"></Label>
          <label :text="data.to" class="h3 font-weight-bold" textWrap="true"/>
        </StackLayout>
      </GridLayout>
    </card-view>
  </StackLayout>
</template>

<script>
import * as utils from "~/shared/utils";
import { ImageSource } from "@nativescript/core/image-source";

export default {
  props: {
    data: {
      default: {}
    }
  },
  data() {
    return {
    };
  },
  components: {},
  computed: {
    height() {
      return 100;
    }
  },
  methods: {
    onItemTap() {
      this.$emit("tap", this.data);
    }
  },
  // beforeMount() {
  //   if (this.data.imageSource == undefined)
  //     this.data.imageSource = "~/images/earth.png";
  // },
  mounted() {
    ImageSource.fromUrl(this.data.image).then(source => {
      this.data.imageSource = source;
      this.$forceUpdate();
    });
  }
};
</script>