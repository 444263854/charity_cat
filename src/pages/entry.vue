<template>
  <div class="bg">
    <div class="content">
      <img src="../assets/images/login.png">
      <h1>关于猫的公益</h1>
      <p>如果你无法简洁的表达你的想法，那只能说明你还不够了解它</p>
      <p>———阿尔伯特·爱因斯坦</p>
      <div class="btn">
        <Base-Button class="left" @click="register">加入我们</Base-Button>
        <Base-Button class="right" @click="entryHome">逛逛社区</Base-Button>
      </div>
    </div>

  </div>
</template>
<script>
  export default {
    methods: {
      register() {
        this.$router.push({
          name: 'register'
        })
      },
      entryHome() {
        this.$router.push({
          name: 'app'
        })
      }
    }
  }

</script>

<style lang="less" scoped>
  .bg {
    background: #ffddce;
    width: 100%;
    height: 100%;
    overflow: hidden;

    .content {
      margin: 15vh auto 0;
      width: 600px;
      text-align: center;

      h1 {
        font-size: 60px;
      }

      p:first-of-type {
        margin-top: 50px;
        font-size: 20px;
      }

      p:nth-of-type(2) {
        font-size: 22px;
        text-align: right;
      }

      .btn {
        margin-top: 80px;

        button {
          font-size: 24px;
          padding: 20px 50px;
        }
      }
    }
  }

</style>
