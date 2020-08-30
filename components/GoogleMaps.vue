<template>
  <GMap
     ref="gMap"
     :center="{lat: locations.lat, lng: locations.lng}"
     :options="{fullscreenControl: false, streetViewControl: false, mapTypeControl: false, zoomControl: true, gestureHandling: 'cooperative', styles: mapStyle}"
     :zoom="12"
   >
     <GMapMarker
       :position="{lat: locations.lat, lng: locations.lng}"
      :options="{icon: locations === currentLocation ? pins.selected : pins.notSelected}"
     >
       <GMapInfoWindow :options="{maxWidth: 200}">
         <b>{{ locations.name }}</b>
         <br>
         <br>
         <code>
           Lat: {{ locations.lat }},
           <br>
           Lng: {{ locations.lng }}
         </code>
       </GMapInfoWindow>
     </GMapMarker>
   </GMap>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'GoogleMaps',
    props: ['reservationObject'],
    data() {
        return {
          currentLocation: {},
          locationsVisibleOnMap: "",
          locations: {
              lat: 41.850033,
              lng: -87.6500523,
              name: this.reservationObject.city+", "+this.reservationObject.State
          },
          pins: {
            selected:
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHUSURBVHgB5VU7SwNBEJ7LmZBgMC+UdKKx0MZCG2srwcbCB2glpFDQ3to/IegvSAIWPrBJIySlipUKKqYLaHJ3iWIelzu/DTk8j71H7MQPltmZnflmZ3b3juivQ3BzCIfDI4FAYBvTRV3XR7tBglCCOIP9oFwuv/46QSwWWwfZIaaDNi7vGOlqtZqhfhPE4/EViAy5V6ljE8uVSuXYc4JkMjncarUeMR0ib5Db7fZEvV6vWBd8PG+Q73LIFYyj3lAsa1G/37/D4+JWgPbcQkybd9jpdGYVRXlmSiQSSYmieMWmhgMuwI0kSTPkpQJgzKJnDfJuKYryBJH7sVNBSPGI7BKoFl3n+GguMY4JHiz6GtoybiisRczmEtPFAM+Ifl6i5DmTKYqeX+Nssj19lUz9N2J4XNxDTiQSkwi4oz6ADU3hLdxb7dwW9RyL5B0FHrltAgZUsEce4eRrmwB3ugCRJ3fk4VvsOwEDHtcWxKeDy4emaWmHdRKdFpvNphQKhdhFmOet42D3sftTJw7X/wHgw/U8h1ywkJ/gYJeI/wi/g8kdmqqqG5Alk62Er+emG7nXBFSr1aroNSNknwOVzZnNS6xIHtFoNF6CweAbpheyLOfo3+ALfrSuzJ1F8EsAAAAASUVORK5CYII=",
            notSelected:
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABHElEQVR42uVVyw4BMRQdC98lsbPwG5YSH+BzWFtLZilh0oQgFh6J54IwBmGYtrfaBREdcTvDhpM0adrec3rb+7Csn8fRdrLg7VzBubhDzmHrudRuZ2KRs/miLd6AThfNaOTTGRFIsMm8bkSuXBeGoLVaGi0g39wLI4GTf1EjdE/+E1pAAGgEAenkb/tBo1vQFUDgBbSbny6al77uSQwB/6wJSNHoAo8xj30iaYMW4Lv9wfSTpc0eH6atXtE4TKWNUS4AY2hyddY4k/lwVEZncm9QilQuBGPwnp1B5GIXGi3P0eU0c7EqKrje5hU5d7fr2P2AEJIESkNqB1XJkvhI0/GrTuqZX619tLMF/VHlfnk5/0r7ZMvVWA3rr3AF6LIMZ7PmSlUAAAAASUVORK5CYII="
          },
          mapStyle: [
            {
              featureType: "all",
              elementType: "labels.text.fill",
              stylers: [
                {
                  color: "#ffffff"
                }
              ]
            },
            {
              featureType: "all",
              elementType: "labels.text.stroke",
              stylers: [
                {
                  visibility: "on"
                },
                {
                  color: "#3e606f"
                },
                {
                  weight: 2
                },
                {
                  gamma: 0.84
                }
              ]
            },
            {
              featureType: "all",
              elementType: "labels.icon",
              stylers: [
                {
                  visibility: "off"
                }
              ]
            },
            {
              featureType: "administrative",
              elementType: "geometry",
              stylers: [
                {
                  weight: 0.6
                },
                {
                  color: "#313536"
                }
              ]
            },
            {
              featureType: "landscape",
              elementType: "geometry",
              stylers: [
                {
                  color: "#96A7B7"
                }
              ]
            },
            {
              featureType: "poi",
              elementType: "geometry",
              stylers: [
                {
                  color: "#305f78"
                }
              ]
            },
            {
              featureType: "poi.attraction",
              elementType: "geometry.stroke",
              stylers: [
                {
                  color: "#f5e4e4"
                },
                {
                  visibility: "off"
                }
              ]
            },
            {
              featureType: "poi.attraction",
              elementType: "labels",
              stylers: [
                {
                  visibility: "on"
                },
                {
                  lightness: "14"
                }
              ]
            },
            {
              featureType: "poi.park",
              elementType: "geometry",
              stylers: [
                {
                  color: "#7978AA"
                },
                {
                  visibility: "simplified"
                }
              ]
            },
            {
              featureType: "road",
              elementType: "geometry",
              stylers: [
                {
                  color: "#7978AA"
                },
                {
                  lightness: "-10"
                }
              ]
            },
            {
              featureType: "transit",
              elementType: "geometry",
              stylers: [
                {
                  color: "#c7c7d1"
                }
              ]
            },
            {
              featureType: "water",
              elementType: "geometry",
              stylers: [
                {
                  color: "#F6F4F6"
                }
              ]
            }
          ]
        };
      },
      // asyncData({$axios, params}){
      //   let self = this
      //     let url = 'https://maps.googleapis.com/maps/api/geocode/json?address='+this.reservationObject.city+', '+this.reservationObject.State+'&key=AIzaSyA265ivOqWLWvq2WAHhLAa4ml4I4Z9_1m4'
      //   return $axios.get(url).then(function (response) {
      //       //
      //       // self.locations[0].lat = response.data.results[0].geometry.location.lat
      //       // self.locations[0].lng = response.data.results[0].geometry.location.lng
      //       //
      //       return {
      //         locations: response.data.results[0].geometry.location.lat,
      //         locations: response.data.results[0].geometry.location.lng
      //       }
      //   })
      //   .catch(function (error) {
      //     console.log(error);
      //   });
      // },
      created(){
        this.getGEOCode()
      },
      methods:{
        getGEOCode: function(){
          /**
          Google maps use lat and lng for location
          */
          let self = this
          let url = 'https://maps.googleapis.com/maps/api/geocode/json?address='+this.reservationObject.city+', '+this.reservationObject.State+'&key=AIzaSyA265ivOqWLWvq2WAHhLAa4ml4I4Z9_1m4'
          axios.get(url).then(function (response) {
              self.locations.lat = response.data.results[0].geometry.location.lat
              self.locations.lng = response.data.results[0].geometry.location.lng
              self.$refs.gMap.map.setCenter(self.locations);
          })
          .catch(function (error) {
            console.log(error);
          });
        }
      }

  }
</script>

<style scoped>
.GMap__Wrapper {
  width: 100%;
  height: 300px;
}
</style>
