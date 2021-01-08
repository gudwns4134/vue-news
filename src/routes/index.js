import Vue from "vue";
import VueRouter from "vue-router";
import AskView from "../views/AskView.vue";
import NewsView from "../views/NewsView.vue";
import JobsView from "../views/JobsView.vue";
import UserView from "../views/UserView.vue";
import ItemView from "../views/ItemView.vue";
// import createListView from "../views/CreateListView.js";
import bus from "../utils/bus.js";
import { store } from "../store/index.js";

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/news", // path => '/' 여기이면 /news로 가랏
    },
    {
      // path: url 주소
      path: "/news",
      name: "news",
      // component: url 주소로 갔을 때 표시될 컴포넌트
      component: NewsView,
      beforeEnter: (to, from, next) => {
        // console.log(to, from, next);
        bus.$emit("start:spinner");
        store
          .dispatch("FETCH_LIST", to.name)
          .then(() => next())
          .catch((error) => {
            console.log(error);
          });
      },
      // component: createListView('NewsView') // HOC
    },
    {
      path: "/ask",
      name: "ask",
      component: AskView,
      beforeEnter: (to, from, next) => {
        // console.log(to, from, next);
        bus.$emit("start:spinner");
        store
          .dispatch("FETCH_LIST", to.name)
          .then(() => next())
          .catch((error) => {
            console.log(error);
          });
      },
      // component: createListView('AskView') // HOC
    },
    {
      path: "/jobs",
      name: "jobs",
      component: JobsView,
      beforeEnter: (to, from, next) => {
        // console.log(to, from, next);
        bus.$emit("start:spinner");
        store
          .dispatch("FETCH_LIST", to.name)
          .then(() => next())
          .catch((error) => {
            console.log(error);
          });
      },
      // component: createListView('AskView')
    },
    {
      path: "/user/:id",
      component: UserView,
    },
    {
      path: "/item/:id",
      component: ItemView,
    },
  ],
});
