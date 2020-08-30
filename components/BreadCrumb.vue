<template>
  <div>
    <small class="fs-1 font-family-secondary text-uppercase font-weight-light letter-spacing-caption text-muted">
          <nuxt-link to="/" class="kasaLink font-weight-bold" >Kasa</nuxt-link> |  {{breadCrumbObject.mainTitle}}
    </small>
    <h3 class="subTitle">{{breadCrumbObject.subTitle}}</h3>
  </div>
</template>
<script>
export default {
  name: 'BreadCrumb',
  props: ['breadCrumbObject'],
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
