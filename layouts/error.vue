<template>
  <div class="container">

    <div class="col-12">
      <h1 class="subTitle">Oh No!!!</h1>
      <p class="text-muted"> Looks like an error </p>
    </div>
  </div>
</template>
<script>
export default {
  props: ['error']
}
</script>
<style scoped>
.subTitle{
  padding-top:6px;
  color: #302a8d;
}
.kasaLink{
  color: #F18B02;
}
</style>
