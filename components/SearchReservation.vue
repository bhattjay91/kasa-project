<template>
  <div class="">
    <div class="form-group">

      <input type="text" aria-label="Search" v-model="search" class="form-control searchBar rounded-0" placeholder="New York City">
    </div>
    <ul  class="listBox list-group rounded-0">
      <li class="list-group-item" v-for="eachReservation in listOfReservations">
        <nuxt-link class="link" style="text-decoration: none;" :to="eachReservation.confirmation_code">  <h5 class="titleLink">{{eachReservation.city}}, {{eachReservation.State}}</h5> </nuxt-link>
        <span class="date">{{eachReservation.checkInDate | dateFormat}} - {{eachReservation.checkOutDate | dateFormat}}</span>
          <small class="md-3 sm-6 badge badge-primary badge-pill rounded-0">
            <nuxt-link class="link" :to="eachReservation.confirmation_code"># {{eachReservation.confirmation_code}}  </nuxt-link>
          </small>
      </li>
        <li class="text-muted" v-if="listOfReservations.length == 0">No results found.</li>
    </ul>
  </div>
</template>


<script>
  import axios from 'axios';

  export default {
    props: ['reservationsList'],
    name: 'SearchReservation',
    data(){
        return {
          search: "",
          listOfReservations: this.reservationsList,
        }
    },
    filters: {
      /*
        Probly best to create a dateFormat plugin and use it globally,
        but 'filters' was nice nd quick to change the value
      */
      dateFormat: function (value) {
        var date = new Date(value);
        date.setDate(date.getDate()+1);
        const dateTimeFormat = new Intl.DateTimeFormat('en', { year: 'numeric', month: 'short', day: '2-digit' })
        const [{ value: month },,{ value: day },,{ value: year }] = dateTimeFormat.formatToParts(date )
        return `${month} ${day}, ${year }`
      }
    },

    methods:{
      getReservations: function(){
        let self = this
        this.showFullList = true
        let url = 'https://jay-bhatt-kasa-project.herokuapp.com/Reservations?_sort=checkInDate:ASC'
        if(this.search != ""){
           url = 'https://jay-bhatt-kasa-project.herokuapp.com/Reservations?_where[_or][0][city_contains]='+this.search+'&_where[_or][1][confirmation_code]='+this.search
        }
        axios.get(url).then(function (response) {
          self.listOfReservations = response.data
        })
        .catch(function (error) {
          console.log(error);
        });
      }
    },
    watch:{
      search: function(newValue, oldValue){
        /*
          Ofcourse I can simply use object to filter the search,
          but I decide to use rest calls for live search via db.
        */
        this.getReservations()
      }
    }
  }

</script>

<style scoped>
  .searchBar{
    height:60px;
  }
  .list-group{
    max-height: 200px;
    margin-bottom: 10px;
    overflow-y:scroll;
    -webkit-overflow-scrolling: touch;
    border: none;
  }
  .link{
    color: white;
  }
  .titleLink{
    color: #302a8d;
    cursor: pointer;
  }
  .badge-primary{
    background-color: #302a8d;
    padding:6px;
    float:right;
  }
  .showList{
    padding-top:2px;
    cursor: pointer;
    color: #302a8d;
    float:right;
  }
  .list-group-item{
    border: none;
    border-bottom: 1px solid rgba(0,0,0,.125);
  }
  .list-group-item:hover{
    background-color: rgba(0,0,0,.03);
  }
  .date{
  font-size:14px;
  }
  .listBox{
  border: 1px solid #ced4da;
  padding: 10px;
}
</style>
