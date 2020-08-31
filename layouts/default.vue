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

<style >
body {
    margin: 0;
    font-family: Roboto, sans-serif;
    /* font-size: 1rem;
     */font-weight: 400;
    line-height: 1.625;
    color: #212529;
    text-align: left;
    background-color: #fff;
    min-height: 100vh;
    position: relative;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
body {
    min-width: 992px!important;
}

</style>
