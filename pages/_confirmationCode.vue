<template>

<div v-if="!loading">
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="">
          <span class="kasaTitle">Your reservation in {{reservation.city}}, {{reservation.State}}</span>
        </div>
      </div>
    </div>
    <div class="row pt-4">
      <div class="col-4">
        <div class="">
            <img src="img/architecture.jpg" class="rounded kasaImage" alt="...">
        </div>
      </div>
      <div class="col-8 kasaBox">
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
      </div>
    </div>
  </div>

      <nuxt-link to="/" class="btn btn-primary">Go Back</nuxt-link>
</div>
</template>

<script>
  import axios from 'axios';

  export default {
    name: 'Confirmation',
    data(){
      return {
        reservation:{},
        loading: false
      }
    },
    filters: {
      dateFormat: function (value) {

        var date = new Date(value);
        date.setDate(date.getDate()+1);
        const dateTimeFormat = new Intl.DateTimeFormat('en', { year: 'numeric', month: 'short', day: '2-digit' })
        const [{ value: month },,{ value: day },,{ value: year }] = dateTimeFormat.formatToParts(date )
        return `${month} ${day}, ${year }`
      }
    },
    created(){
      this.getSingleReservation()
    },
    methods:{
      getSingleReservation: function(){
        let self = this
        this.$data.loading = true
        axios.get('http://localhost:1337/Reservations?confirmation_code='+this.$route.params.confirmationCode, {headers: {'Accept': 'application/json'}}).then(function (response) {

          self.loading = false
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
  text-transform: uppercase;
  color: #302a8d;
}
.ratingChecked{
  color: #302a8d !important;
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

</style>
