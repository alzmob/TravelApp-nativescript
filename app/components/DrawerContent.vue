<template lang="html">
<GridLayout rows="auto, *" class="nt-drawer__content">
			<StackLayout row="0" class="nt-drawer__header">
				<Image class="nt-drawer__header-image fas t-36" src.decode="font://&#xf2bd;"></Image>
				<Label class="nt-drawer__header-brand" text="User Name"></Label>
				<Label class="nt-drawer__header-footnote" text="username@mail.com"></Label>
			</StackLayout>
		
			<ScrollView row="1" class="nt-drawer__body">
				<StackLayout>
					<GridLayout columns="auto, *" :class="'nt-drawer__list-item' + (selectedPage === 'Vacation' ? ' -selected': '')" @tap="onNavigationItemTap(Vacation)">
						<Label col="0" text.decode="&#xf015;" class="nt-icon fas"></Label>
						<Label col="1" text="Vacation" class="p-r-10"></Label>
					</GridLayout>

					<GridLayout columns="auto, *" :class="'nt-drawer__list-item' + (selectedPage === 'City' ? ' -selected': '')" @tap="onNavigationItemTap(Country)">
						<Label col="0" text.decode="&#xf64f;" class="nt-icon fas"></Label>
						<Label col="1" text="Cities" class="p-r-10"></Label>
					</GridLayout>

					<GridLayout columns="auto, *" :class="'nt-drawer__list-item' + (selectedPage === 'Flight' ? ' -selected': '')" @tap="onNavigationItemTap(Flight)">
						<Label col="0" text.decode="&#xf5b0;" class="nt-icon fas"></Label>
						<Label col="1" text="Flights" class="p-r-10"></Label>
					</GridLayout>

					<GridLayout columns="auto, *" :class="'nt-drawer__list-item' + (selectedPage === 'Hotel' ? ' -selected': '')" @tap="onNavigationItemTap(Hotel)">
						<Label col="0" text.decode="&#xf594;" class="nt-icon fas"></Label>
						<Label col="1" text="Hotels" class="p-r-10"></Label>
					</GridLayout>
		
					<StackLayout class="hr"></StackLayout>

					<GridLayout columns="auto, *" :class="'nt-drawer__list-item' + (selectedPage === 'Profile' ? ' -selected': '')" @tap="onNavigationItemTap(Profile)">
						<Label col="0" text.decode="&#xf4fe;" class="nt-icon fas"></Label>
						<Label col="1" text="Profile" class="p-r-10"></Label>
					</GridLayout>

					<GridLayout columns="auto, *" :class="'nt-drawer__list-item' + (selectedPage === 'TermsCondition' ? ' -selected': '')" @tap="onNavigationItemTap(TermsCondition)">
						<Label col="0" text.decode="&#xf56c;" class="nt-icon fas"></Label>
						<Label col="1" text="Terms and Condition" class="p-r-10"></Label>
					</GridLayout>

					<GridLayout columns="auto, *" :class="'nt-drawer__list-item'" @tap="onLogout()">
						<Label col="0" text.decode="&#xf2f5;" class="nt-icon fas"></Label>
						<Label col="1" text="Logout" class="p-r-10"></Label>
					</GridLayout>
				</StackLayout>
			</ScrollView>
		</GridLayout>
</template>

<script>
import Login from "./auth/Login";
import Vacation from "./Vacation";
import Country from "./city/Country";
import Flight from "./flight/Flight";
import Hotel from "./hotel/Hotel";
import Settings from "./Settings";
import Profile from "./Profile";
import TermsCondition from "./TermsCondition";

import * as utils from "~/shared/utils";
import SelectedPageService from "~/shared/selected-page-service";
import GlobalStore from '~/services/GlobalStore';

export default {
  mounted() {
    SelectedPageService.getInstance().selectedPage$.subscribe(
      selectedPage => (this.selectedPage = selectedPage)
    );
  },
  data() {
    return {
			Vacation,
			Country,
			Flight,
			Hotel,
			Profile,
			TermsCondition,

      selectedPage: ""
    };
  },
  components: {
		Vacation,
		Country,
		Flight,
		Hotel,
		Profile,
		TermsCondition
  },
  methods: {
    onNavigationItemTap(component) {
      this.$navigateTo(component, {
        clearHistory: true
      });
      utils.closeDrawer();
    },
    onLogout() {
      let options = {
        title: GlobalStore.appName,
        message: "Do you really want to logout?",
        okButtonText: "Yes",
        cancelButtonText: "No",
      };

      confirm(options).then((result) => {
				if (!result) return;

				utils.closeDrawer();
				this.$backendService.logout();
				this.$navigateTo(Login, {
					clearHistory: true
				});
      });
    }
  }
};
</script>