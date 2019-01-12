<template>
  <form>
    <h1>欢迎加入猫公益</h1>
    <h2>注册账号</h2>
    <div class="iptWrap">
      <label for="username">账号:</label>
      <input v-focus type="text" name="username" ref="username" placeholder="请输入您常用的手机号/邮箱" v-model="username">
    </div>
    <div class="iptWrap">
      <label for="password1">密码:</label>
      <input type="password" name="password1" placeholder="请输入6位以上字符密码" v-model="password1">
    </div>
    <div class="iptWrap">
      <label for="password2">确认密码:</label>
      <input type="password" name="password2" placeholder="再次输入密码" v-model="password2" @blur="validatePasswordHandler">
    </div>
    <div class="iptWrap">
      <label for="vilidtorCode">验证码:</label>
      <input type="text" name="vilidtorCode" placeholder="请输入验证码" v-model="validateCode">
      <Base-Button class="right" @click="getvalidateCodeHandler" :disabled="disabled">{{btnMsg}}</Base-Button>
    </div>
    <div class="wrap">
      <p>点击注册账号,表示同意<router-link to="">服务条款</router-link>和<router-link to="">隐私条款</router-link>
      </p>
    </div>
    <div class="wrap">
      <Base-Button type="submit" @click="registerHandler">注册账号</Base-Button>
    </div>
    <div class="wrap">
      <p>已有账号，直接<router-link to="login">登录</router-link>
      </p>
    </div>
  </form>
</template>
<script>
  export default {
    data() {
      return {
        password1: '',
        password2: '',
        username: '',
        validateCode: '',
        btnMsg: '获取验证码',
        disabled: false
      };
    },
    methods: {
      validatePasswordHandler() {
        if (this.password1 !== this.password2) {
          this.$messageBox("两次密码不一致");
          return false
        }
        return true
      },
      emailValidate() {
        let re = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
        if (re.test(this.username)) {
          return true
        }
        this.$messageBox("邮箱不正确");
        return false
      },
      getvalidateCodeHandler(e) {
        if (!this.emailValidate()) {
          return
        }
        this.disabled = true
        this.axios.get('api/user/register/Code', {
          params: {
            username: this.username
          }
        }).then((res) => {
          this.btnMsg = 60
          this.$messageBox(res.data.msg);
          let time = Date.now();
          let interId = setInterval(() => {
            this.btnMsg--
            let nowTime = Math.round(60 - (Date.now() - time) / 1000);
            this.btnMsg = nowTime < this.btnMsg ? nowTime : this.btnMsg;
            if (this.btnMsg <= 0) {
              this.disabled = false
              this.btnMsg = '获取验证码'
              clearInterval(interId)
            }
          }, 1000)
        }).catch((err) => {
          this.disabled = false
        })
      },
      registerHandler(e) {
        e.preventDefault();

        console.log("​registerHandler -> this.$refs['username']", this.$refs['username']);
        if (this.username == "") {
          this.$messageBox("用户名不能为空");
          return;
        }
        if (this.password1 == "") {
          this.$messageBox("请输入密码");
          return;
        }
        if (this.validateCode == "") {
          this.$messageBox("请输入验证码");
          return;
        }
        if (!this.validatePasswordHandler()) return;
        if (!this.emailValidate()) return;
        //ajax
        this.axios
          .post("api/user/register", {
            name: this.username,
            username: this.username,
            password: this.password1,
            validateCode: this.validateCode
          })
          .then(res => {
            if (res.data.status == 200) {
              this.password1 = ''
              this.password2 = ''
              this.username = ''
              this.validateCode = ''
            }
            this.$messageBox(res.data.msg);
          });
      }
    }
  };

</script>
