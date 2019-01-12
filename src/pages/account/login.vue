<template>
  <div>
    <h1>欢迎加入猫公益</h1>
    <h2>注册账号</h2>
    <div class="iptWrap">
      <label for="userName">账号:</label>
      <input type="text" v-focus name="username" placeholder="请输入您常用的手机号/邮箱" v-model="username">
    </div>

    <div class="iptWrap">
      <label for="password">密码:</label>
      <input type="password" name="password" placeholder="请输入6位以上字符密码" v-model="password">
    </div>

    <div class="wrap" style="text-align:left">
      <label for="rememberMe" class="box"> <input type="checkbox" v-model="remember" :value="true">记住我7天</label>
    </div>

    <div class="wrap">
      <Base-Button @click="loginHandler" :class="{not_allow:!clickable}" :disabled="!clickable">登录</Base-Button>
    </div>

    <div class="wrap">
      <router-link to="modifyPassword">忘记密码？</router-link>
    </div>

    <div class="wrap">
      <p>没有账号？<router-link to="register">注册账号</router-link>
      </p>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        username: "",
        password: "",
        remember: "",
        clickable: true
      };
    },
    mounted() {
      if (this.$root.$data.get("isLogin")) {
        this.$router.replace({
          name: "home"
        });
      }
    },
    methods: {
      loginHandler() {

        if (this.username == "" || this.password == "") {
          this.$messageBox("请输入用户名或密码");
          return;
        }
        this.clickable = false;
        this.axios
          .post("api/user/login", {
            username: this.username,
            password: this.password,
            remember: this.remember
          })
          .then(res => {
            //登录成功跳转到社区
            if (res.data.status == 200) {
              this.$root.$data.set("avatar", res.data.content.avatar);
              this.$root.$data.set("isLogin", true);
              this.$router.push({
                name: "app"
              });
            } else {
              this.$messageBox(res.data.msg);
            }
            this.clickable = true;
          }).catch(err => {
            this.$messageBox(err);
            this.clickable = true;
          });
      }
    }
  };

</script>

<style lang="less" scoped>
  @import url('../../assets/styles/mix.less');

  .box {
    vertical-align: middle;

    input {
      vertical-align: middle;
      width: 16px;
      height: 16px;
    }
  }

</style>
