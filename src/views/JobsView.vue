<template>
  <div>
      <p v-for="job in this.$store.state.jobs" v-bind:key="job.id">
        <a :href="job.url">{{ job.title }}</a> &nbsp;
        <small>{{job.time_ago}} &nbsp; {{ job.domain }}</small>
      </p>
  </div>
</template>

<script>
export default {
  created () {
    this.$store.dispatch("FETCH_JOBS")
  }
}
</script>

<style>

</style>