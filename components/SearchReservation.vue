<template>
  <div>
    <div class="form-group">
      <input type="text" v-model="search" class="form-control searchBar" placeholder="New York City">
      <a  @click="showFullList = !showFullList" class="font-weight-light showList">{{showFullList ? 'Hide' : 'Show' }} List</a>
    </div>
  </br>
    <ul v-if="showFullList" class="list-group">
      <li class="list-group-item" v-for="eachReservation in listOfReservations">
        <nuxt-link class="link" style="text-decoration: none;" :to="eachReservation.confirmation_code">  <h5 class="titleLink">{{eachReservation.city}}, {{eachReservation.State}}</h5> </nuxt-link>
        <span>{{eachReservation.checkInDate | dateFormat}} - {{eachReservation.checkOutDate | dateFormat}}</span>
          <small class="md-3 sm-6 badge badge-primary badge-pill">
            <nuxt-link class="link" :to="eachReservation.confirmation_code"># {{eachReservation.confirmation_code}}  </nuxt-link>
          </small>
      </li>
    </ul>
    <span v-if="listOfReservations.length == 0">No results found.</span>
  </div>
</template>


<script>
  import axios from 'axios';

  export default {
    name: 'SearchReservation',
    data(){
        return {
          search: "",
          listOfReservations: [],
          showFullList: false,
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
      this.getReservations();
    },
    methods:{
      getReservations: function(){
        let self = this
        this.showFullList = true
        let url = 'http://localhost:1337/Reservations?_sort=checkInDate:ASC'
        if(this.search != ""){
          //const query = qs.stringify({ _where: { _or: [{ city_contains: this.search }, { confirmationCode_contains: this.search }] } });

           url = 'http://localhost:1337/Reservations?_where[_or][0][city_contains]='+this.search+'&_where[_or][1][confirmation_code]='+this.search
        }
        axios.get(url, {headers: {'Accept': 'application/json'}}).then(function (response) {
          self.listOfReservations = response.data
        })
        .catch(function (error) {
          console.log(error);
        });
      }
    },
    watch:{
      search: function(newValue, oldValue){
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
    max-height: 300px;
    margin-bottom: 10px;
    overflow:scroll;
    -webkit-overflow-scrolling: touch;
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
.list-group-item:hover{
  background-color: rgba(0,0,0,.03);
}

</style>
