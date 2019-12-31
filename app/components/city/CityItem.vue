<template>
  <StackLayout>
    <card-view margin="5 0" elevation="40" radius="5" @tap="onItemTap">
      <GridLayout :height="height" rows="auto, *" :columns="height + ', *'">
        <Image :src="data.imageSource" stretch="aspectFill" rowSpan="2" col="0" class="fas m-r-10" />
        <label
          :text="data.name"
          class="h2 font-weight-bold m-y-10"
          textWrap="true"
          row="0"
          col="1"
        />
        <label :text="data.description" margin="0 10 10 0" textWrap="true" row="1" col="1" />
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
      default: {
        id: null,
        name: null,
        image: null,
        imageSource: "~/images/city.png"
      }
    }
  },
  data() {
    return {
    };
  },
  components: {},
  computed: {
    height() {
      return 120;
    }
  },
  methods: {
    onItemTap() {
      this.$emit("tap", this.data);
    }
  },
  // beforeMount() {
  //   if (this.data.imageSource == undefined)
  //     this.data.imageSource = "~/images/city.png";
  // },
  mounted() {
    ImageSource.fromUrl(this.data.image).then(source => {
      this.data.imageSource = source;
      this.$forceUpdate();
    });
  }
};
</script>