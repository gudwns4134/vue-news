<template>
  <div>
    <p v-for="item in askItems" v-bind:key="item.id">
      <router-link :to="`item/${item.id}`">
        {{ item.title }}
      </router-link>
      <small>{{ item.time_ago }} {{ item.user }}</small>
    </p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["askItems"]),
  },
  created() {
    this.$store.dispatch("FETCH_ASK");
  },
};
</script>

<style>
</style>