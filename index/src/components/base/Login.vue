<template>
  <body id="poster">
    <el-form class="login-container" label-position="left" label-width="0px">
      <h3 class="login_title">系统登录</h3>
      <el-form-item>
        <el-input
          type="text"
          v-model="loginForm.email"
          auto-complete="off"
          placeholder="邮箱"
        ></el-input>
      </el-form-item>
      <el-form-item v-if="!bLoginText">
        <el-input
          type="text"
          v-model="loginForm.username"
          auto-complete="off"
          placeholder="昵称"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-input
          type="password"
          v-model="loginForm.password"
          auto-complete="off"
          placeholder="密码"
        ></el-input>
      </el-form-item>
      <el-form-item style="width: 100%">
        <el-button v-if="bLoginText"
          type="primary"
          style="width: 100%; background: #505458; border: none"
          v-on:click="login"
          >登录</el-button
        >
        <el-button v-if="!bLoginText"
          type="primary"
          style="width: 100%; background: #505458; border: none"
          v-on:click="register"
          >注册</el-button
        >
        <div @click="bLoginText = !bLoginText">{{ bLoginText ? "没有账号?点击注册" : "返回登陆" }}</div>
      </el-form-item>
    </el-form>
  </body>
</template>

<script>
import { register, list, login } from "@/request/api/login";
export default {
  name: "Login",
  data() {
    return {
      loginForm: {
        email: "",
        username: "",
        password: "",
      },
      bLoginText: true, // 是否为登陆状态
      responseResult: [],
    };
  },
  methods: {
    login() {
      let _this = this;
      let obj = {
        email: this.loginForm.email,
        password: this.loginForm.password,
      };
      login(obj).then((res) => {
        const { message, data } = res;
        if (res.code === 200) {
          _this.$store.commit("login", _this.loginForm);
          let path = this.$route.query.redirect;
          this.$router.replace({
            path: path === "/" || path === undefined ? "/index" : path,
          });
        }
      });
    },
    register() {
      let _this = this;
      let obj = {
        email: this.loginForm.email,
        name: this.loginForm.username,
        password: this.loginForm.password,
      };
      register(obj).then((res) => {
        const { message, data } = res;
        if (res.code === 200) {
          console.log(res)
        }
      });
    },
  },
};
</script>
<style lang="less" scoped>
#poster {
  background: url("../../assets/eva.jpg") no-repeat;
  background-position: center;
  height: 100%;
  width: 100%;
  background-size: cover;
  position: fixed;
}
body {
  margin: 0px;
}
.login-container {
  border-radius: 15px;
  background-clip: padding-box;
  margin: 90px auto;
  width: 350px;
  padding: 35px 35px 15px 35px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}

.login_title {
  margin: 0px auto 40px auto;
  text-align: center;
  color: #505458;
}
</style>