<template>
  <section class="jumbotron bg-white" :style="{ backgroundImage: `url(${backgroundUrl})` }">
      <div class="container">
        <div class="row">
            <!-- <div class="col-12 " >
              <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel" data-interval="8000">
                <div class="carousel-inner">
                  <div :class="eachImage.active ? 'active' : ''" class="carousel-item" v-for="eachImage in homeImages">
                    <img class="d-block w-100" :src="eachImage.src" :alt="eachImage.title" />
                  </div>
                </div>
              </div >
            </div> -->
          <div class="col-lg-6 col-md-8 col-sm-12 col-xs-12" style="background-color: #f7f7f7; padding:20px;">
            <h2>Find your reservation</h2>
            <p class="lead text-muted">You can search by providing the city or the confirmation code of your reservation.</p>
            <SearchReservation />
          </div>
          <!-- <div class="col-lg-8 col-md-6 col-sm-2">


          </div> -->
        </div>

      </div>
      </div>
    </section>
</template>

<script>
  import SearchReservation from '~/components/SearchReservation.vue';
  import backgroundUrl from '~/assets/house.jpg'

  export default {
    name: 'Home',
    components: {
      SearchReservation,
    },
    data(){
        return {
          backgroundUrl,
          homeImages:[
            {
              title: 'Living room',
              src: 'img/living-room.jpg',
              active: true
            },
            {
              title: 'Bed room',
              src: 'img/bed.jpg'
            },
            {
              title: 'Big size house',
              src: 'img/large-room.jpg'
            },
            {
              title: 'Hallway',
              src: 'img/home.jpg'
            },
            {
              title: 'Normal size house',
              src: 'img/architecture.jpg'
            },
          ]
        }
    },
    head(){
      return {
        title: 'Find your reservation',
        meta:[
          {
            hid: 'home',
            name: 'description',
            content: 'Find your Kasa reservation with a simple search'
          }
        ]
      }
    }
  }

</script>

<style scoped>
.jumbotron{
    background-position: center center;
    -webkit-background-size: 100% 100%;
    -moz-background-size: 100% 100%;
    -o-background-size: 100% 100%;
    background-size: 100% 100%;
    border-radius: 0;
}
</style>
