<template lang="html">
  <Page class="page">
    <ActionBar class="action-bar">
      <NavigationButton ios:visibility="collapsed" android.systemIcon="ic_menu_back" @tap="onBack"/>
      <Label class="action-bar-title" text="Register"></Label>
    </ActionBar>

    <GridLayout rows="*, auto, *, auto" class="m-10">
      <StackLayout row="1">
        
        <!-- <TextField
          class="input m-b-10"
          keyboardType="name"
          autocorrect="false"
          autocapitalizationType="none"
          hint="Username"
          v-model="user.name"
          returnKeyType="next"/> -->

        <TextField
          class="input m-b-10"
          keyboardType="email"
          autocorrect="false"
          autocapitalizationType="none"
          hint="Email"
          v-model="user.email"
          returnKeyType="next"/>

        <TextField
          class="input m-b-10"
          autocorrect="false"
          autocapitalizationType="none"
          secure="true"
          hint="Password"
          v-model="user.password"
          returnKeyType="done"/>

        <TextField
          class="input m-b-10"
          autocorrect="false"
          autocapitalizationType="none"
          secure="true"
          hint="Password"
          v-model="user.conformPassword"
          returnKeyType="done"/>

        <ActivityIndicator rowSpan="3" :busy="processing"></ActivityIndicator>
        
        <Button
          text="Sign Up"
          :isEnabled="!processing"
          @tap="submit"
          class="-primary m-b-20"/>
      </StackLayout>
      
      <StackLayout row="3" orientation="vertical" width="auto">
        <Label horizontalAlignment="center" class="font-weight-bold" @tap="onBack" text="I have an account now."/>
      </StackLayout>
    </GridLayout>
  </Page>
</template>

<script>
import GlobalStore from '~/services/GlobalStore';
import * as utils from "~/shared/utils";
import SelectedPageService from "~/shared/selected-page-service";
import Vacation from "~/components/Vacation";

export default {
  mounted() {
    SelectedPageService.getInstance().updateSelectedPage("Register");
  },
  data() {
    return {
      isLoggingIn: true,
      processing: false,
      user: {
        email: "vue@nativescript.org",
        password: "vue",
        conformPassword: "vue"
      }
    };
  },
  methods: {
    onBack() {
      this.$navigateBack();
    },
    submit() {
      if (!this.user.email || !this.user.password) {
        utils.alert("Please provide both an email address and password.");
        return;
      }

      this.processing = true;
      this.$backendService
        .register(this.user)
        .then(() => {
          this.processing = false;

          this.$navigateTo(Vacation, {
            clearHistory: true
          });
        })
        .catch(e => {
          console.log(e);
          this.processing = false;
          this.alert("Unfortunately we could not register your account.");
        });
    },
  }
};
</script>