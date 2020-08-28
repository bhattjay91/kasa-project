<template>
<div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 bg-white">
  <nuxt-link to="/" class="my-0 mr-md-auto font-weight-normal logo"><img class="mb-2" src="https://img.icons8.com/door" alt="" width="24" height="24"><h5 style="padding-left: 5px; display: inline-block;">Kasa</h5></nuxt-link>
  <nav class="my-2 my-md-0 mr-md-3">
    <nuxt-link to="/" class="links p-2 text-dark ">Your reservations</nuxt-link>
    <nuxt-link to="/FAQ" class="p-2 text-dark">FAQ</nuxt-link>
    <span class="font-weight-light">
      <span :class="$nuxt.isOnline ? 'dot greenDot' : 'dot redDot'"></span>
      {{$nuxt.isOnline ? 'Online' : 'Offline'}}
     </span>
  </nav>
</div>
</template>

<script>
  export default {
    name: 'Header',
  }
</script>

<style scoped>
  .logo{
    color: #302a8d;
  }

  a:hover{
    color: #302a8d !important;
  }
  .dot {
    height: 10px;
    width: 10px;
    border-radius: 50%;
    display: inline-block;
  }
  .greenDot {
    background-color: #2ECC40;
  }
  .redDot {
    background-color: #FF4136;
  }
</style>
