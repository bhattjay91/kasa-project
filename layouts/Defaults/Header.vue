<template>
  <div class="container">
    <div class="row">
      <nav class="navbar navbar-expand-lg navbar-light w-100" id="header-navbar">
          <nuxt-link to="/" class="my-0 mr-md-auto font-weight-normal logo"><img class="mb-2" src="~/assets/img/icons/door.png" alt="door" width="30" height="30"><h3 style="padding-left: 5px; display: inline-block;">Kasa</h3></nuxt-link>
          <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item"><nuxt-link to="/" class="links p-2 text-dark ">Your reservations</nuxt-link></li>
            <li class="nav-item"><nuxt-link to="/FAQ" class="p-2 text-dark">FAQ</nuxt-link></li>
          </ul>
        <div class="navbar-spacer"></div>
        <span class="status font-weight-light">
          <span :class="$nuxt.isOnline ? 'dot greenDot' : 'dot redDot'"></span>
          {{$nuxt.isOnline ? 'Online' : 'Offline'}}
         </span>
      </div>
      </nav>
    </div>
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
  .navbar {
      position: relative;
      display: -ms-flexbox;
      display: flex;
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;
      -ms-flex-align: center;
      align-items: center;
      -ms-flex-pack: justify;
      justify-content: space-between;
      padding: 1.25rem 1rem;
  }
  .nav-item{
    margin-right: 20px;
  }
  @media (max-width:920px) {
    .nav-item{
      margin-bottom: 10px;
    }
    #navbarSupportedContent{
      padding-top: 20px;
    }
  }

</style>
