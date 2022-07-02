<template>
  <div class="wrapper">
    <div class="wrapper-content">
      <section>
        <div class="container">
          <h1>{{ title }}</h1>
          <img alt="Vue logo" src="./assets/logo.png" />
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data () {
    return {
      title: 'Привет МИР!'
    }
  },
};
</script>

<style>
</style>
