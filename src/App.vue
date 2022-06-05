<template>
  <div class="app-container">
    <h1>App 根组件</h1>
    <hr />

    <div class="box">
      <!-- 渲染 Left 组件和 Right 组件 -->
      <!-- <img src="http://10.100.69.219:8301/auth/captcha?key=1234"/> -->
      <button @click="getToken">getToken</button>
      <button @click="testToken">testToken</button>
    </div>
  </div>
</template>

<script>
import qs from 'qs'
import $ from '@/assets/jquery-1.11.3.js'
export default {
  data() {
    return {
      token1: 'ZXR1cmlhbDoxMjM0NTY=',
      token2: '',
      prase: {
        grant_type: 'password',
        username: 'eturial',
        password: '1234qwer',
        key: '1234',
        code: '7592'
      }
      // data: qs.stringify(this.prase)
    }
  },
  methods: {
    getToken() {
      this.axios({
        method: 'POST',
        url: 'auth/oauth/token',
        headers: {
          Authorization: 'Basic ' + this.token1
          // 'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: qs.stringify(this.prase)
      })
        .then(res => {
          console.log(res.data.access_token);
          this.token2 = res.data.access_token
        })
        .catch(err => console.log(err))
    },
    testToken() {
      this.axios({
        url: 'system/info',
        headers: {
          Authorization: 'Bearer ' + this.token2
        }
      }).then( res => {
        console.log(res.data);
      })
    }
  }
}
</script>

<style lang="less">
.app-container {
  padding: 1px 20px 20px;
  background-color: #efefef;
}
.box {
  display: flex;
}
</style>
