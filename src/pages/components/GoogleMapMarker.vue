<script>
import store from '@/store'
// import { POINT_MARKER_ICON_CONFIG } from '@/constants/mapSettings'

export default {
  props: {
    google: {
      type: Object
    },
    map: {
      type: Object
    },
    marker: {
      type: Object
    },
    content: {
      type: Object
    },
    maxWidth: {
      type: Object
    }
  },

  mounted () {
    if (this.google | this.map) {
      const marker = new this.google.maps.Marker({
        position: this.marker.position,
        marker: this.marker,
        content: this.content,
        maxWidth: this.maxWidth,
        map: this.map,
        icon: {
          url: 'http://maps.google.com/mapfiles/ms/micons/cabs.png'
        }
      })
      const infowindow = new this.google.maps.InfoWindow({
        position: this.marker.position,
        content: this.marker.content,
        maxWidth: this.marker.maxWidth
      })
      infowindow.open(this.map, marker)
      marker.addListener('mouseover', function () {
        infowindow.open(this.map, marker)
      })
      marker.addListener('mouseout', function () {
        setTimeout(function () {
          infowindow.close(this.map, marker)
        }, 10000)
      })
    }
  },
  methods: {
    makemarker (data, isFirst) {
      const marker = new this.google.maps.Marker({
        position: data.position,
        marker: this.marker,
        content: data.content,
        maxWidth: data.maxWidth,
        map: this.map,
        icon: {
          url: 'http://maps.google.com/mapfiles/ms/micons/cabs.png'
        }
      })
      const infowindow = new this.google.maps.InfoWindow({
        position: data.position,
        content: data.content,
        maxWidth: data.maxWidth
      })
      if (isFirst) {
        this.map.setZoom(12)
        this.map.panTo(data.position)
        infowindow.open(this.map, marker)
        setTimeout(function () {
          infowindow.close(this.map, marker)
        }, 10000)
      }
      marker.addListener('mouseover', function () {
        this.map.panTo(data.position)
        infowindow.open(this.map, marker)
      })
      marker.addListener('mouseout', function () {
        setTimeout(function () {
          infowindow.close(this.map, marker)
        }, 10000)
      })
    },
    makemarker_without_window (data) {
      const marker = new this.google.maps.Marker({
        position: data.position,
        marker: this.marker,
        map: this.map,
        icon: {
          url: 'http://maps.google.com/mapfiles/ms/micons/cabs.png'
        }
      })
      this.map.setZoom(15)
      this.map.panTo(data.position)
      marker.addListener('mouseover', function () {
        this.map.panTo(data.position)
        store.commit('gotravel/placeName', data.name)
        store.commit('gotravel/placePicture', data.picture1)
        store.commit('gotravel/placePx', data.position.lng)
        store.commit('gotravel/placePy', data.position.lat)
        store.commit('gotravel/showPage', 'mapplacedetail')
      })
    }
  }
}
</script>
