<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <template #activator="{ on, attrs }">
      <div class="navbar-div" v-bind="attrs" v-on="on">
        會員登入
      </div>
    </template>
    <div class="login">
      <v-card>
        <v-card-title>
          <span class="text-h5">TTime 登入</span>
        </v-card-title>
        <v-form
          ref="loginForm"
          :model="loginForm"
          lazy-validation
        >
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field ref="username" v-model="loginForm.username" label="帳號" required />
                </v-col>
                <v-col cols="12">
                  <v-text-field ref="password" v-model="loginForm.password" label="密碼" type="password" required />
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn color="blue darken-1" text @click="dialog = false">
              取消
            </v-btn>
            <v-btn color="blue darken-1" text @click.native.prevent="handleLogin">
              登入
            </v-btn>
          </v-card-actions>
          </form>
        </v-form>
      </v-card>
    </div>
  </v-dialog>
</template>

<script>
import Swal from 'sweetalert2'
export default {
  name: 'Login',
  data: () => ({
    dialog: false,
    successAlert: false,
    loginForm: {
      username: '',
      password: ''
    }
  }),
  methods: {
    handleLogin () {
      this.$store.dispatch('user/login', this.loginForm)
        .then(() => {
          this.$router.push({ path: this.redirect || '/', query: this.otherQuery })
          this.dialog = false
          Swal.fire({
            icon: 'success',
            title: '登入成功',
            showConfirmButton: false,
            timer: 1500
          })
        })
        .catch(() => {
        })
      // this.$refs.loginForm.validate((valid) => {
      //   if (valid) {
      //     this.loading = true
      //     this.$store.dispatch('user/login', this.loginForm)
      //       .then(() => {
      //         this.$router.push({ path: this.redirect || '/', query: this.otherQuery })
      //         this.loading = false
      //       })
      //       .catch(() => {
      //         this.loading = false
      //       })
      //   } else {
      //     console.log('error submit!!')
      //     return false
      //   }
      // })
    }
  }
}
</script>
<style scoped>
.text-h5 {
  font-weight: 400;
}

.navbar-div {
  display: flex;
  align-items: center;
  color: #707070;
  font-size: 1.2vw;
  font-weight: 400;
  letter-spacing: 0.02vw;
}
</style>
