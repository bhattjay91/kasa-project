<template>

    <footer>
      <div class="container">
        <div class="row">

          <div class="col-lg-4 col-md-6">
            <h4>Cities</h4>
            <ul class="list-unstyled three-column">
              <li v-for="eachCities in cities">{{eachCities}}</li>
            </ul>
            <span class="text-muted">more...</span>
          </div>

          <div class="col-lg-4 col-md-6">
            <h4>Guests</h4>
            <ul class="list-unstyled">
              <li>Book a Kasa</li>
              <li>Location</li>
              <li>FAQ</li>
              <li>Guest Portal</li>
            </ul>
          </div>

          <div class="col-lg-4">
            <h4>Latest Kasa</h4>
            <img class="latestKasaImg" src="~/assets/img/houses/smallsize/bed-small.jpg" alt="bed" />
            <img class="latestKasaImg" src="~/assets/img/houses/smallsize/living-room-small.jpg" alt="living room" />
            <img class="latestKasaImg" src="~/assets/img/houses/smallsize/large-home-small.jpg" alt="large home" />
            <img class="latestKasaImg" src="~/assets/img/houses/smallsize/home-small.jpg" alt="home" />
          </div>

        </div>
      </div>
      <div class="copyright text-center">
        Copyright &copy; 2020 <span class="font-weight-bold">Jay Bhatt</span>
      </div>
    </footer>
</template>

<script>
  export default {
    name: 'Footer',
    data(){
      return {
        cities:['Atlanta', 'Austin', 'Chicago','Houston','Miami', 'Newport', 'New York City', 'San Jose'],
      }
    }
  }
</script>


<style scoped>
a{
 /* color: #302a8d !important; */
}
footer {
  background-color: #f2f2f2;

  padding-top: 10px;
}

footer a {
  color: #aaa;
}

footer a:hover {
  color: #fff;
}

footer h4 {
 color: #302a8d;
 letter-spacing: 1px;
 margin: 30px 0 20px;
}

footer .three-column {
 overflow: hidden;
}

footer .three-column li{
 width: 33.3333%;
  float: left;
  padding: 5px 0;
}


.latestKasaImg {
  margin-bottom: 5px;
  width: 150px;
}

footer .copyright {
  color: #302a8d;
  padding: 15px 0;
  background: #f2f2f2;
  margin-top: 20px;
  font-size: 15px;
}

footer .copyright span {
  color: #F18B02;
}
</style>
