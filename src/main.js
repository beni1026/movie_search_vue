import * as Vue from "vue";
import App from "~/App.vue";
import store from "~/store";
import router from "~/routes";
// import "~/scss/styles.scss";
// import * as bootstrap from "bootstrap";

const app = Vue.createApp(App);
app.use(store);
app.use(router);
app.mount("#app");
