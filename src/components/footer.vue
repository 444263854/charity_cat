<template>
  <footer class="clear">
    <div class="inner_wrap">
      <div class="logo">
        <img width="150" height="150">
      </div>
      <div class="contact">
        <div class="contact_inner">
          <p>联系我们 CONTANT</p>
          <p>E-mail:XXXXXXXXX@XXX.com</p>
          <p>QQ:XXXXXXXXXX</p>
        </div>
        <p class="foot">Copr@ 2018-2018 公益猫 版权所有。</p>
      </div>
      <div class="QR">
        <div class="QR_wrap">
          <p>微信公众号</p>
          <img width="130" height="130">
          <p>扫一扫，我们一起来养猫</p>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
  export default {
    name: "foot"
  };

</script>
<style scoped lang='less'>
  @import url("../assets/styles/mix.less");
  footer {
    @footerH: 200px;
    height: @footerH;
    background: @c-oragin;
    margin-top: 40px;

    .inner_wrap {
      @vertical_margin: 25px;
      width: 1000px;
      height: inherit;
      margin: 0 auto;
      &>div {
        .left;
        color: rgba(255, 255, 255, .9);
        height: @footerH;
        box-sizing: border-box;
        position: relative;
      }
      .logo {
        width: 300px;
        img {
          width: 150px;
          height: 150px;
          background: rgba(255, 255, 255, 0.4);
          margin: 25px;
        }
      } //end logo
      .contact {
        width: 400px;
        font-size: 14px;
        .contact_inner {
          height: @footerH - 50px;
          border: 2px solid rgba(255, 255, 255, 0.8);
          border-top: none;
          border-bottom: none;
          margin: @vertical_margin 0;
          p {
            padding-left: 55px;
            line-height: 24px;
            &:first-of-type{
              margin-bottom:6px;
            }
          }
        }

        .foot {
          font-size: 12px;
          line-height: 1;
          position: absolute;
          bottom: 10px;
          width: 100%;
          text-align: center;
        }
      } //end contact
      .QR {
        width: 300px;
        .QR_wrap {
          .right;
          margin-right: 35px;
          p:first-of-type {
            font-size: 14px;
            height: 35px;
            line-height: 35px;
            text-align: center;
          }
          p:last-of-type {
            font-size: 12px;
          }
          img {
            width: 130px;
            height: 130px;
            background: rgba(255, 255, 255, 0.3);
          }
        }
      } //end QR
    }
  }

</style>
