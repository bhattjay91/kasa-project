<template>

  <section class="section sectionConfirmation">
      <div v-if="showError">
        <div class="container">
          <h5>Oh No! </h5>
          <p class="text-muted">Either you don't have internet connection or the confirmaton code is invalid. Please <nuxt-link to="/" class="ratingChecked">go back</nuxt-link> try again.</p>
        </div>
      </div>
      <div v-if="!showError" class="container" >
        <BreadCrumb :breadCrumbObject="breadCrumbObject" />
        <div  class="row">

            <div class="col-lg-6 col-12 kasaBox">
              <div class="list kasaAddress">
                <label>Confirmation:</label> #{{reservation.confirmation_code}}
              </div>
              <div class="list kasaAddress">
                <label>Location:</label> {{reservation.kasaName}}
              </div>
              <div class="list kasaCity">
                <label>Address:</label> {{reservation.city}}, {{reservation.State}}
              </div>
              <div class="list kasaDates">
                <label>Dates:</label> {{reservation.checkInDate | dateFormat}} - {{reservation.checkOutDate | dateFormat}} <span class="font-weight-light">({{reservation.nights}})</span>
              </div>
              <div class="list kasaRating">
                <span class="fa fa-star ratingStars ratingChecked" v-for="rating in reservation.rating" > </span><span class="fa fa-star ratingStars" v-for="noRating in 5-reservation.rating" > </span>
              </div>
              <div class="col-2 d-inline ">
                <img class="latestKasaImg" src="~/assets/img/houses/bed2.jpg" alt="" />

              </div>
              <div class="col-2 d-inline ">
                <img class="latestKasaImg" src="~/assets/img/houses/livingroom2.jpg" alt="" />

              </div>
              <div class="col-2 d-inline ">
                <img class="latestKasaImg" src="~/assets/img/houses/kitchen.jpg" alt="" />

              </div>
            </div>
            <div class="col-lg-6 col-12 googleBox">
              <GoogleMaps :reservationObject="reservation" />
            </div>
        </div>
    </div>

</section>
</template>

<script>
  import BreadCrumb from '~/components/BreadCrumb.vue';
  import GoogleMaps from '~/components/GoogleMaps.vue';

  export default {
    name: 'Confirmation',
    components: {
      BreadCrumb,
      GoogleMaps,
    },
    head(){
      return {
        title: 'Your Reservation',
        meta:[
          {
            hid: 'confirmation',
            name: 'description',
            content: 'Reservation Confirmation page'
          }
        ]
      }
    },
    data(){
      return {
        breadCrumbObject:{
          mainTitle: 'Your Reservation in',
          subTitle: ''
        },
        reservation:{},
        showError: false
      }
    },
    filters: {
      dateFormat: function (value) {

        if(value != undefined){

          var date = new Date(value);
          date.setDate(date.getDate()+1);
          const dateTimeFormat = new Intl.DateTimeFormat('en', { year: 'numeric', month: 'short', day: '2-digit' })
          const [{ value: month },,{ value: day },,{ value: year }] = dateTimeFormat.formatToParts(date )
          return `${month} ${day}, ${year }`
        }

        return false

      }
    },
    asyncData({$axios, params}){

         return $axios.get('/Reservations?confirmation_code='+params.confirmationCode).then(function (response) {
           if(response.data.length == 0){
            return {showError: true}
           } else {
             let  reservation = response.data[0]
             let date1 = new Date(reservation.checkInDate);
             let date2 = new Date(reservation.checkOutDate);
             let diff = new Date(date2.getTime() - date1.getTime());
             let night = diff.getUTCDate() - 1
             reservation.nights =  night+" night"+(night > 1 ? 's': '')
             return { reservation: reservation }
           }

         })
         .catch(function (error) {
           return {showError: true}
           console.log(error);
        });
    },

    created(){

      this.breadCrumbObject.subTitle = this.reservation.city+', '+this.reservation.State

      //dont need this, using asyncData
      //this.getSingleReservation()
    },
    methods:{

        getOnlineStatus() {
          return this.$nuxt.isOnline

      },
      /*
      getSingleReservation: function(){
        let self = this

        axios.get('https://jay-bhatt-kasa-project.herokuapp.com/Reservations?confirmation_code='+this.$route.params.confirmationCode, {headers: {'Accept': 'application/json'}}).then(function (response) {

          self.reservation = response.data[0]
          let date1 = new Date(self.reservation.checkInDate);
          let date2 = new Date(self.reservation.checkOutDate);
          let diff = new Date(date2.getTime() - date1.getTime());
          let night = diff.getUTCDate() - 1
          self.reservation.nights =  night+" night"+(night > 1 ? 's': '')
        })
        .catch(function (error) {
          console.log(error);
        });
      }
      */
    }
  }
</script>

<style scoped>
.kasaTitle{
    font-size: 16px;
    line-height: 1.2;
    letter-spacing: 0.1em;
    color: #302a8d;
    text-transform: uppercase;
    font-weight: 700;
}
.kasaImage{
  width:100%;
  height: 250px;
}
label{
  min-width: 90px;
  display: inline-block;
  /* text-transform: uppercase; */
  color: #302a8d;
}
.ratingChecked{
  color: #F18B02 !important;
}
.ratingStars {
  font-size:24px;
  color:grey;
}
.list{
  padding:10px;
}
.kasaBox{
  background-color: rgba(0,0,0,.03);
  padding: 10px;
}
.googleBox{
  padding: 10px;
}
.sectionConfirmation{
    padding-top: 1.375rem;
    padding-bottom: 1.375rem;
}
.latestKasaImg {
  margin-bottom: 5px;
  width: 150px;
}
.kasaRating{
  padding-left:10px;
}

</style>
