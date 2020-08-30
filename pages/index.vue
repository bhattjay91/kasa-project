<template>

  <section class="housePage " style="min-height: 732px;">
   <div class="houseBackground">
     <img src="~/assets/img/houses/house.jpg" alt="House Background">
   </div>
    <div class="reservationContainer d-flex flex-column justify-content-center">
     <div class="container d-flex align-items-center justify-content-center justify-content-lg-start">
       <div class="col-lg-6 col-8">
         <div class="card border-0 rounded-0" >
           <div class="card-body text-body ">
             <h2 class="text-black">Find your reservation</h2>
          <p class="lead text-muted">You can search by providing the city or the confirmation code of your reservation.</p>
           <SearchReservation :reservationsList="reservationsList" />
       </div>
     </div>
   </div>
    </div>
    </div>
  </section>

</template>

<script>
  import SearchReservation from '~/components/SearchReservation.vue';

  export default {
    name: 'Home',
    components: {
      SearchReservation,
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
    },
    asyncData({$axios}){
        return $axios.get('/Reservations?_sort=checkInDate:ASC').then(function (response) {
          let  reservationsList = response.data
          return { reservationsList: reservationsList }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  }

</script>

<style scoped>

.reservationContainer{
  transition: all .75s ease-in-out;
  transition-delay: .25s;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 10;
}


.houseBackground {
    position: absolute;
    z-index: 5;
    visibility: hidden;
    right: 0;
    left: auto;
    -webkit-animation: hero-bg-reveal 1s;
    animation: hero-bg-reveal 1s;
    visibility: visible;

}

@media (min-width:1400px) {
  .houseBackground {
    width: 90%
  }
}
.houseBackground img {
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  font-family: "object-fit:cover";
  object-fit: cover;
}
.houseBackground-overlay {
    z-index: 6;
}
.housePage{
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  background: #fff;
}

</style>
