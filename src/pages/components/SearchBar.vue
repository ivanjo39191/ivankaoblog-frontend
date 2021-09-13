<template>
  <div class="container-fluid search">
    <div class="row">
      <div class="col-2">
        <SlideBar msg="Welcome to Your Vue.js App" />
      </div>
      <div class="col-10 searchbar">
        <!-- 頁首複合式搜尋框 -->
        <div class="row indexTop-searchGroup">
          <div class="col-8">
            <div class="input-group ">
              <input
                v-model="keyword"
                title="title"
                type="text"
                autocomplete="off"
                placeholder="輸入你想檢索的旅程、景點或標籤..."
                class="form-control border-0 bg-light p-1 bg-light rounded rounded-pill"
              >
              <div class="input-group-btn">
                <select title="field" class="btn">
                  <option value="all">
                    不限欄位
                  </option>
                  <option value="title" selected>
                    地點
                  </option>
                  <option value="publisher">
                    地區
                  </option>
                </select>
              </div>
            </div>
          </div>
          <!-- /左側搜尋框 -->
          <div class="p-1 bg-light rounded rounded-pill shadow-sm col-1">
            <button class="btn btn-indexSearch col-xs-12" type="button" @click="search()">
              搜尋
            </button>
          </div>
          <!-- /登入登出 -->
          <div>
            <b-dropdown id="dropdown-1" text="我的旅程" class="m-md-2">
              <a class="dropdown-item" @click="login">Login</a>
              <a class="dropdown-item" @click="logout">logout</a>
              <a class="dropdown-item" @click="user">我的旅程</a>
            </b-dropdown>
          </div>
        </div><br>
        <!-- /頁首複合式搜尋框 -->
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import SlideBar from '@/pages/components/SlideBar.vue'

export default {
  name: 'SearchBar',
  components: {
    SlideBar
  },
  props: {
    msg: String
  },
  data () {
    return {
      keyword: this.value
    }
  },
  methods: {
    search () {
      this.$router.push({ name: 'searchresults', params: { value: this.$data.keyword } })
    },
    async logout () {
      await this.$store.dispatch('user/logout')
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    },
    login () {
      this.$router.push({
        path: '/login' // use name for router push
      })
    },
    user () {
      this.$router.push({
        name: 'user' // use name for router push
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.search {
  background: #f2f2f2;
  height: 10vh;
}

.searchbar p {
  font-size: 7vh;
}

.searchbar {
  padding-top: 3vh;
  padding-left: 10vh;
  padding-right: 10vh;
}

/*
searchbar
*/

.form-control:focus {
  box-shadow: none;
}

.form-control-underlined {
  border-width: 0;
  border-bottom-width: 1px;
  border-radius: 0;
  padding-left: 0;
}

body {
  background: #ffd89b;
  background: linear-gradient(to right, #ffd89b, #19547b);
  min-height: 100vh;
}

.form-control::placeholder {
  font-size: 0.95rem;
  color: #aaa;
  font-style: italic;
}
</style>
