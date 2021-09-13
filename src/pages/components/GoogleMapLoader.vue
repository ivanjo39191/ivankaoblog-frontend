<template>
  <div>
    <div ref="googleMap" class="google-map" />
    <template v-if="Boolean(google) && Boolean(map)">
      <slot :google="google" :map="map" />
    </template>
    <!-- <GoogleMapMarker ref="googlemapmarker" :google="google" :map="map" /> -->
  </div>
</template>

<script>
// import store from '@/store'
import GoogleMapsApiLoader from 'google-maps-api-loader'
// import GoogleMapMarker from '@/pages/components/GoogleMapMarker'

export default {
  // components: {
  //   GoogleMapMarker
  // },
  props: {
    mapConfig: {
      type: Object,
      default () {
        return {}
      }
    },
    apiKey: {
      type: String,
      default () {
        return ''
      }
    }
  },
  data () {
    return {
      google: null,
      map: null,
      markers: [],
      mapkeyword: this.value
    }
  },
  // created () {
  //   const Swal = this.$swal
  //   window.addToShopList = function (json_d, name) {
  //     const placeInfo = {
  //       id: json_d,
  //       name,
  //       date: '2021-03-25',
  //       day: '1',
  //       from: '',
  //       to: ''
  //     }
  //     Swal.fire({
  //       title: '請選擇要停留的時間:',
  //       input: 'select',
  //       inputOptions: {
  //         '08:00:00': '08:00:00',
  //         '09:00:00': '09:00:00',
  //         '10:00:00': '10:00:00',
  //         '11:00:00': '11:00:00'
  //       },
  //       inputPlaceholder: '請選擇要停留的時間',
  //       showCancelButton: true
  //     }).then((result) => {
  //       if (result.value) {
  //         placeInfo.from = result.value
  //         Swal.fire({
  //           title: '請選擇開始時間:',
  //           input: 'select',
  //           inputOptions: {
  //             '08:00:00': '08:00:00',
  //             '09:00:00': '09:00:00',
  //             '10:00:00': '10:00:00',
  //             '11:00:00': '11:00:00'
  //           },
  //           inputPlaceholder: '請選擇結束時間',
  //           showCancelButton: true
  //         }).then((result) => {
  //           if (result.value) {
  //             placeInfo.to = result.value
  //             store.commit('schedule/addList', placeInfo)
  //           }
  //         })
  //       }
  //     })
  //   }
  // },
  async mounted () {
    const googleMapApi = await GoogleMapsApiLoader({
      apiKey: this.apiKey
    })
    this.google = googleMapApi
    this.initializeMap()
  },

  methods: {
    initializeMap () {
      const mapContainer = this.$refs.googleMap
      this.map = new this.google.maps.Map(mapContainer, this.mapConfig)
    },
    // searchmarker () {
    //   this.$ajax
    //     .get(
    //       process.env.VUE_APP_BACKEND_SERVER +
    //         '/api/trips/places/position/?name=' +
    //         this.$data.mapkeyword
    //     )
    //     .then((res) => {
    //       for (const [index, value] of res.data.entries()) {
    //         const json_d = value.json_d
    //         const name = value.name
    //         let marker = []
    //         let is_first = false
    //         const detailpath = '/placedetail/' + value.json_d
    //         if (index === 0) {
    //           is_first = true
    //         }
    //         marker = {
    //           id: value.json_d,
    //           position: {
    //             lng: parseFloat(value.px),
    //             lat: parseFloat(value.py)
    //           },
    //           content:
    //             '<h4>' +
    //             value.name +
    //             '</h4>' +
    //             '<img class="img" src="' +
    //             value.picture1 +
    //             '"><br><a href="' +
    //             detailpath +
    //             '" target="_blank"><h5>景點介紹</h5></a><button onclick="addToShopList(' +
    //             "'" +
    //             json_d +
    //             "', '" +
    //             name +
    //             "'" +
    //             ')">加入旅程</button>',
    //           maxWidth: 200
    //         }
    //         this.$refs.googlemapmarker.makemarker(marker, is_first)
    //       }
    //     })
    //     .catch(err => console.log(err))
    // },
    searchMarkerPosition () {
      const placename = this.$store.getters['gotravel/pagename']
      const placepicture = this.$store.getters['gotravel/placepicture']
      const placepx = this.$store.getters['gotravel/placepx']
      const placepy = this.$store.getters['gotravel/placepy']
      let marker = []
      marker = {
        name: placename,
        picture1: placepicture,
        position: {
          lng: parseFloat(placepx),
          lat: parseFloat(placepy)
        }
      }
      this.$refs.googlemapmarker.makemarker_without_window(marker)
    }
  }
}
</script>

<style>
.img {
  max-width: 12vh;
  max-height: 12vh;
}

.mapsearch {
  position: absolute;
  top: 5vh;
  right: 1vw;
  width: 40vw;
  height: 2vh;
  z-index: 2000;
}
</style>
