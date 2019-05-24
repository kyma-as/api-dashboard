import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;
Vue.component("v-alert", {});
Vue.component("v-app", {});
Vue.component("v-autocomplete", {});
Vue.component("v-avatar", {});
Vue.component("v-badge", {});
Vue.component("v-bottom-nav", {});
Vue.component("v-bottom-sheet", {});
Vue.component("v-breadcrumbs", {});
Vue.component("v-breadcrumbs-item", {});
Vue.component("v-btn", {});
Vue.component("v-btn-toggle", {});
Vue.component("v-card", {});
Vue.component("v-card-media", {});
Vue.component("v-card-title", {});
Vue.component("v-carousel", {});
Vue.component("v-carousel-item", {});
Vue.component("v-checkbox", {});
Vue.component("v-chip", {});
Vue.component("v-combobox", {});
Vue.component("v-content", {});
Vue.component("v-counter", {});
Vue.component("v-data-iterator", {});
Vue.component("v-data-table", {});
Vue.component("v-date-picker", {});
Vue.component("v-date-picker-date-table", {});
Vue.component("v-date-picker-header", {});
Vue.component("v-date-picker-month-table", {});
Vue.component("v-date-picker-title", {});
Vue.component("v-date-picker-years", {});
Vue.component("v-dialog", {});
Vue.component("v-divider", {});
Vue.component("v-edit-dialog", {});
Vue.component("v-expansion-panel", {});
Vue.component("v-expansion-panel-content", {});
Vue.component("v-footer", {});
Vue.component("v-form", {});
Vue.component("v-hover", {});
Vue.component("v-icon", {});
Vue.component("v-image", {});
Vue.component("v-img", {});
Vue.component("v-input", {});
Vue.component("v-jumbotron", {});
Vue.component("v-label", {});
Vue.component("v-list", {});
Vue.component("v-list-group", {});
Vue.component("v-list-tile", {});
Vue.component("v-list-tile-action", {});
Vue.component("v-list-tile-avatar", {});
Vue.component("v-menu", {});
Vue.component("v-menu-transition", {});
Vue.component("v-messages", {});
Vue.component("v-navigation-drawer", {});
Vue.component("v-overflow-btn", {});
Vue.component("v-overlay", {});
Vue.component("v-pagination", {});
Vue.component("v-parallax", {});
Vue.component("v-picker", {});
Vue.component("v-progress-circular", {});
Vue.component("v-progress-linear", {});
Vue.component("v-radio", {});
Vue.component("v-radio-group", {});
Vue.component("v-range-slider", {});
Vue.component("v-rating", {});
Vue.component("v-responsive", {});
Vue.component("v-select", {});
Vue.component("v-select-list", {});
Vue.component("v-slider", {});
Vue.component("v-small-dialog", {});
Vue.component("v-snack", {});
Vue.component("v-snackbar", {});
Vue.component("v-snack-transition", {});
Vue.component("v-spacer", {});
Vue.component("v-speed-dial", {});
Vue.component("v-stepper", {});
Vue.component("v-stepper-content", {});
Vue.component("v-stepper-step", {});
Vue.component("v-subheader", {});
Vue.component("v-switch", {});
Vue.component("v-system-bar", {});
Vue.component("v-tab", {});
Vue.component("v-tab-item", {});
Vue.component("v-table", {});
Vue.component("v-tabs", {});
Vue.component("v-tabs-items", {});
Vue.component("v-tabs-slider", {});
Vue.component("v-textarea", {});
Vue.component("v-text-field", {});
Vue.component("v-time-picker", {});
Vue.component("v-time-picker-clock", {});
Vue.component("v-time-picker-title", {});
Vue.component("v-toolbar", {});
Vue.component("v-toolbar-side-icon", {});
Vue.component("v-tooltip", {});

new Vue({
  router,
  // providing the store option to the root instance,
  // the store will be injected into all child components of the root
  // and will be available on them as this.$store
  store,
  render: function(h) {
    return h(App);
  },
  created() {
    // Prevent blank screen in Electron builds
    this.$router.push("/");
  }
}).$mount("#app");
