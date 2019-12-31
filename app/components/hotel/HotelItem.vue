<template>
  <StackLayout>
    <card-view margin="5 0" elevation="40" radius="5" @tap="onItemTap">
      <GridLayout :height="height" rows="*, auto, auto, auto" :columns="height + ', *'">
        <Image :src="data.imageSource" stretch="aspectFill" rowSpan="4" col="0" class="fas m-r-10"/>
        <label :text="data.name" class="h3 font-weight-bold" row="0" col="1" />
        <label :text="data.title" class="h4 font-weight-bold" row="1" col="1" />
        
        <StackLayout row="2" col="1" orientation="horizontal">
          <Label text.decode="&#xf3c5;" class="nt-icon fas m-r-5 text-primary"></Label>
          <label :text="data.address" class="h4 font-weight-bold"/>
        </StackLayout>

        <StackLayout row="3" col="1" orientation="horizontal">
          <Label text.decode="&#xf879;" class="nt-icon fas m-r-5 text-primary"></Label>
          <label :text="data.contact" class="h4 font-weight-bold"/>
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