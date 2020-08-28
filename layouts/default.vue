<template>
  <div id="app" class="container">
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
  import Header from '~/layouts/Defaults/Header.vue';
  import Footer from '~/layouts/Defaults/Footer.vue';

  export default {
    components: {
      Header,
      Footer
    }
  }

</script>

<style scoped>

</style>
