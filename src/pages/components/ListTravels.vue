<template>
  <div class="">
    <div class="row">
      <div class="col-md-5 text-center nicefont">
        <h4>Welcome to Youtube Rater</h4>
      </div>
      <button @click="getTravels">
        Get my first Travels
      </button>
    </div>
    <div class="col-md-12 text-left">
      <h5 v-for="trip in trips" :key="trip.id">
        {{ trip.title }}
      </h5>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Home',
  components: {

  },
  data () {
    return {
      trips: []
    }
  },
  methods: {
    getTravels () {
      this.$ajax.get(process.env.VUE_APP_BACKEND_SERVER + '/api/trips/trip/')
        .then(res => (this.trips = res.data))
      // .then(res => (console.log(res.data)))
        .catch(err => console.log(err))
    }
  }
}
</script>
