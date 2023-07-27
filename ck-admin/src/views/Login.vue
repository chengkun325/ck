<template>
  <div class='login'>
    <el-form :model="loginForm" class="login-form">
      <h3 class="title">后端管理系统</h3>
      <el-form-item prop="userName">
        <el-input v-model="loginForm.userName" autocomplete="off" placeholder="请输入用户名" type="text"/>
      </el-form-item>
      <el-form-item prop="password">
        <el-input v-model="loginForm.password" autocomplete="off" placeholder="请输入密码" show-password
                  type="password"/>
      </el-form-item>
      <el-form-item>
        <el-button type="success" @click="handleLogin">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import {ref} from "vue";
import {useRouter} from "vue-router"
import service from "../utils/http.ts";
import store from "../store";

const router = useRouter()

let loginForm = ref({
  userName: '',
  password: '',
})

let handleLogin = () => {
  service.post('/users/login', loginForm.value).then(res => {
    console.log(res)
    if (res.status === 401) {
      alert("用户名或密码错误！请重新登录！")
      return;
    }
    if (res.status === 200) {
      store.state.token = res.data.token
      router.push({
        path: '/dashboard'
      })
    }
  })
}
</script>

<style scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url("../assets/images/login-background.jpg");
  background-size: cover;
}

.login-form {
  border-radius: 6px;
  background: #ffffff;
  width: 400px;
  padding: 25px 25px 5px 25px;
}

.title {
  margin: 0 auto 30px auto;
  text-align: center;
  color: #707070;
}
</style>
