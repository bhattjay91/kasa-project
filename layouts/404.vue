<template>
  <div id="notfound">
    <div class="notfound">
      <img alt="door" src="~assets/img/icons/door.png" />
      <div class="notfound-404">
        <h1>4<span>0</span>4</h1>
      </div>
      <h2>Oh Noo! you've enter wrong Kasa</h2>
        <h4><nuxt-link class="homeLink" to="/">Go back to Kasa</nuxt-link></h4>
      </div>
  </div>
</template>
<script>

export default {
  head(){
    return {
      title: '404 Page Not Found',
      meta:[
        {
          hid: '404',
          name: '404 error',
          content: 'Page Not Found'
        }
      ]
    }
  },
}
</script>
<style scoped>
* {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

body {
  padding: 0;
  margin: 0;
}

#notfound {
  position: relative;
  height: 100vh;
  background: #f6f6f6;
}

#notfound .notfound {
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

.notfound {
    max-width: 767px;
    width: 100%;
    line-height: 1.4;
    padding: 110px 40px;
    text-align: center;
    background: #fff;
    -webkit-box-shadow: 0 15px 15px -10px rgba(0, 0, 0, 0.1);
    box-shadow: 0 15px 15px -10px rgba(0, 0, 0, 0.1);
}

.notfound .notfound-404 {
  position: relative;
  height: 180px;
}

.notfound .notfound-404 h1 {

  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  font-size: 165px;
  font-weight: 700;
  margin: 0px;
  color: #262626;
  text-transform: uppercase;
}

.notfound .notfound-404 h1>span {
  color: #F18B02;
}

.notfound h2 {
  font-family: 'Roboto', sans-serif;
  font-size: 22px;
  font-weight: 400;
  text-transform: uppercase;
  color: #151515;
  margin-top: 0px;
  margin-bottom: 25px;
}


@media only screen and (max-width: 767px) {
  .notfound h2 {
    font-size: 18px;
  }
}

@media only screen and (max-width: 480px) {
  .notfound .notfound-404 h1 {
    font-size: 141px;
  }
}

.homeLink{
  color: #302a8d;
}

</style>
