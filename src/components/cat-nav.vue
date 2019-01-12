<template>
  <nav :style="{background:bgColor}">
    <div class="nav_inner">
      <div class="logo">
        <div class="logo_img"></div>
        <div class="text">
          <span class="title">公益猫</span>
          <p class="des">每一只猫猫都值得被爱 为ta寻找港湾</p>
        </div>
      </div>
      <ul class="nav">
        <router-link tag="li" :to="{name:'home'}">首页</router-link>
        <router-link tag="li" :to="{name:'community'}">社区</router-link>
        <router-link tag="li" :to="{name:'journal'}">日记</router-link>
        <router-link tag="li" :to="{name:'publish'}">发布</router-link>
        <router-link tag="li" :to="{name:'mine'}">我的</router-link>
      </ul>
      <div class="mine">
        <template v-if="isLogin">

          <div class="my_head">
            <div class="pic" @click="toggle_dropdown_menuHandler">
              <img :src="'api/'+avatar" v-if="avatar">
            </div>
            <div class="name"> <span @click="toggle_dropdown_menuHandler">{{username}}</span></div>

            <div class="dropdown_menu" :style="{display:dropdown_toggle}">
              <ul>
                <li @click="toMineHandler">
                  <span>个人信息</span>
                </li>
                <li @click="logoutHandler"><span>注销</span></li>
              </ul>
            </div>
          </div>

          <div class="message text_middle">
            <div class="iconfont ">
              &#xe674;
              <i class="sign" v-if="messageCount>0">{{messageCount}}</i>
            </div>
          </div>
        </template>
        <template v-else>
          <router-link :to="{name:'login'}" class="unLogin">登录</router-link>
          <router-link :to="{name:'register'}" class="unLogin">注册</router-link>
        </template>
      </div>

    </div>
  </nav>
</template>

<script>
  export default {
    data() {
      return {
        dropdown_toggle: "none",
        // isLogin: this.$root.$data.get("isLogin"),
        username: "zhangyong",
        messageCount: 10
      };
    },
    methods: {
      logoutHandler() {
        this.dropdown_toggle = "none";
        this.axios.get("api/user/logout").then(res => {
          //刷新当前页
          this.$root.$data.set("isLogin", false);
          this.$router.go(0);
        });
      },
      toggle_dropdown_menuHandler() {
        this.dropdown_toggle == "none" ?
          (this.dropdown_toggle = "block") :
          (this.dropdown_toggle = "none");
      },
      toMineHandler() {
        this.$router.push({
          name: "mine"
        });
        this.dropdown_toggle = "none";
      }
    },
    computed: {
      bgColor() {
        return this.$route.name == "home" ? "#fcd8d8" : "#fff";
      },
      isLogin() {
        return this.$root.$data.get("isLogin");
      },
      avatar() {
        return this.$root.$data.get("avatar");
      }
    }
  };

</script>

<style scoped lang='less'>
  @import url("../assets/styles/mix.less");

  .router-link-active {
    background: @c-oragin;
    color: #fff;
    font-weight: bold;
  }

  .nav_inner {
    width: 1280px;
    height: 50px;
    // overflow: hidden;
    margin: 0 auto;

    .logo {
      .left;
      width: 280px;
      height: inherit;

      .logo_img {
        .left;
        margin-right: 10px;
        height: inherit;
        width: 50px;
        border-radius: 50%;
        background: @c-oragin;
      }

      //logo_img end
      .text {
        .left;
        height: inherit;

        color: @c-oragin;

        .title {
          font-size: 20px;
          font-weight: 600;
          line-height: 28px;
        }

        .des {
          font-family: "FZShuTi", cursive;
          font-size: 12px;
          line-height: 22px;
        }
      }

      //end text
    }

    //nav_head end
    .nav {
      .left;
      font-size: 20px;
      width: 400px;
      height: inherit;
      color: #000;

      & li {
        width: 80px;
        height: inherit;
        line-height: 50px;
        text-align: center;
        cursor: pointer;
        .left;
      }
    }

    //end nav
    .mine {
      .right;
      height: inherit;
      box-sizing: border-box;

      .unLogin {
        font-size: 16px;
        line-height: 50px;
        color: @text-color;
      }

      .my_head {
        .left;
        box-sizing: border-box;
        font-size: 14px;
        padding: 10px 0.5em;
        width: 9em;
        height: inherit;
        position: relative;
        cursor: pointer;

        .pic {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          overflow: hidden;
          background: @c-deepBlue;
          display: inline-block;
          vertical-align: middle;
        }

        .name {
          color: #000;
          width: 5em;
          display: inline-block;
          vertical-align: middle;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .dropdown_menu {
          font-size: 14px;
          width: 105px;
          position: absolute;
          border: 1px solid @borderColor;
          box-shadow: @boxShadowStyle;
          border-radius: 4px;
          margin-top: 8px;
          padding: 5px 0;
          background: #fff;
          cursor: pointer;
          z-index: 10;

          &::before,
          &::after {
            content: "";
            display: inline-block;
            position: absolute;
          }

          &::after {
            border: 7px solid transparent;
            border-bottom-color: #fff;
            top: -14px;
            left: 8px;
          }

          &::before {
            border: 8px solid transparent;
            border-bottom-color: @borderColor;
            top: -16px;
            left: 7px;
          }

          li {
            padding: 5px;

            &:hover {
              color: #fff;
              background: @c-deepBlue;
            }
          }
        }
      }

      //my_head
      .message {
        .right;
        width: 35px;
        height: inherit;
        cursor: pointer;

        .iconfont {
          position: relative;
          font-size: 22px;
          line-height: 1;
          display: inline-block;
        }

        .sign {
          position: absolute;
          left: -9px;
          top: -7px;
          width: 18px;
          height: 14px;
          background: @c-oragin;
          font-size: 12px;
          color: #fff;
          line-height: 1;
          text-align: center;
        }
      }
    }
  }

</style>
