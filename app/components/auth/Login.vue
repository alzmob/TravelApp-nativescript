<template lang="html">
  <Page class="page">
    <ActionBar class="action-bar">
      <Label class="action-bar-title" text="Travel App"></Label>
    </ActionBar>

    <GridLayout rows="*, auto, *, auto" class="m-10">
      <StackLayout row="1">
        <Image class="m-b-30 m-x-20" horizontalAlignment="center" src="~/images/logo.png"></Image>
        
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

        <ActivityIndicator rowSpan="3" :busy="processing"></ActivityIndicator>
        
        <Button
          text="Sign In"
          :isEnabled="!processing"
          @tap="submit"
          class="-primary m-b-20"/>
      </StackLayout>
      
      <StackLayout row="3" orientation="vertical" width="auto">
        <Label horizontalAlignment="center" class="font-weight-bold" @tap="onSignUp" text="I don't have an account."/>
      </StackLayout>
    </GridLayout>
  </Page>
</template>

<script>
import Vacation from "~/components/Vacation";
import Register from "~/components/auth/Register";
import GlobalStore from "~/services/GlobalStore";
import * as utils from "~/shared/utils";
import SelectedPageService from "~/shared/selected-page-service";

export default {
  mounted() {
    SelectedPageService.getInstance().updateSelectedPage("Login");
  },
  data() {
    return {
      isLoggingIn: true,
      processing: false,
      user: {
        email: "vue@nativescript.org",
        password: "vue",
      }
    };
  },
  methods: {
    submit() {
      if (!this.user.email || !this.user.password) {
        utils.alert("Please provide both an email address and password.");
        return;
      }

      this.processing = true;
      if (this.isLoggingIn) {
        this.login();
      }
    },

    login() {
      this.$backendService
        .login(this.user)
        .then(() => {
          this.processing = false;

          this.$navigateTo(Vacation, {
            clearHistory: true
          });
        })
        .catch(e => {
          console.log(e);
          this.processing = false;
          this.alert("Unfortunately we could not find your account.");
        });
    },

    onSignUp() {
      this.$navigateTo(Register, {
        animated: true
      });
    },
  }
};
</script>