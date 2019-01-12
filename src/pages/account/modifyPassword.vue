<template>
  <div>
    <h1>欢迎加入猫公益</h1>
    <h2>修改密码</h2>
    <div class="iptWrap">
      <label for="username">邮箱:</label>
      <input type="text" v-focus name="username" v-model="username" placeholder="请输入您注册时的邮箱">
    </div>
    <div class="iptWrap">
      <label for="password">密码:</label>
      <input type="password" name="password" v-model='password1' placeholder="请输入密码">
    </div>
    <div class="iptWrap">
      <label for="password2">新密码:</label>
      <input type="password" name="password2" v-model="password2" @blur="validatePasswordHandler" placeholder="请再次输入密码">
    </div>
    <div class="iptWrap">
      <label for="validateCode  ">验证码:</label>
      <input type="text" name="validateCode" v-model="validateCode" placeholder="请输入验证码">
      <Base-Button class="right" :disabled="disabled" @click="getvalidateCodeHandler">{{btnMsg}}</Base-Button>
    </div>
    <div class="wrap">
      <Base-Button @click="modifyClick">确认修改</Base-Button>
    </div>
    <div class="wrap">
      <p>改变主意，直接<router-link to="login">登录</router-link>
      </p>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        disabled: false,
        username: '',
        password1: '',
        password2: '',
        validateCode: '',
        btnMsg: '获取验证码'
      }
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
      modifyClick() {
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
        if (!this.emailValidate()) {
          return
        }
        if (!this.validatePasswordHandler()) return;
        //ajax
        this.axios
          .put("api/user/modifyPassword", {
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
      },
      getvalidateCodeHandler(e) {
        if (!this.emailValidate()) {
          return
        }
        this.disabled = true
        this.axios.get('api/user/modifyPassword/Code', {
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
        }).catch(() => {
          this.disabled = false
        })
      },
    }
  };

</script>
