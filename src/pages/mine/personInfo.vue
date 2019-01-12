<template>
  <div>
    <div class="title">
      <span>个人资料</span>
    </div>

    <div class="info">
      <div class="avatars">
        <div class="pic left">
          <img>
        </div>

        <div class="left ">
          <input type="file" accept="*/images" ref="file_up" style="display:none">
          <Base-Button @click="fileClickHandler" type="noround" class="fileBtn">浏览</Base-Button>
          <p>请选择小于2M的图片</p>
          <p class="tips" :style="{display:showTip}">选择的图片不符合要求</p>
        </div>
      </div>

      <div class="formWrap">
        <label for="name">昵称：</label>
        <Base-Input name="name" placeHolder="请输入昵称"></Base-Input>
      </div>

      <div class="formWrap">
        <label>性别：</label>
        <Base-Radio name="sex" value="man" v-model="sex">男</Base-Radio>
        <Base-Radio name="sex" value="woman" v-model="sex">女</Base-Radio>
      </div>

      <div class="formWrap">
        <label for="tel">手机号：</label>
        <Base-Input name="tel" placeHolder="请输入手机号"></Base-Input>
      </div>

      <div class="formWrap">
        <label for="address">现居地址：</label>
        <Base-Input name="address" placeHolder="请输入您所居住的地址"></Base-Input>
      </div>


      <div class="btn">
        <Base-Button>提交</Base-Button>
      </div>
    </div>

  </div>
</template>
<script>
  export default {
    data() {
      return {
        name: '',
        sex: 'man',
        tel: '',
        address: "",
        showTip: 'none'
      }
    },
    mounted() {
      //TODO:挂载的时候获取个人信息
    },
    methods: {
      fileClickHandler() {
        this.$refs['file_up'].click()
      }
    }
  }

</script>

<style lang="less" scoped>
  @import url('../../assets/styles/mix.less');

  .title {
    font-size: 14px;
  }

  .info {
    margin-top: 20px;

    .avatars {
      height: 100px;

      .pic {
        width: 100px;
        height: 100px;
        overflow: hidden;
        margin-right: 20px;
        margin-left: 30px;
      }

      .fileBtn {
        font-size: 12px;
        padding: 5px 8px;
      }

      .tips {
        color: red;
        display: none;
      }
    }

    .formWrap {
      height: 40px;
      margin-top: 10px;

      label {
        display: inline-block;
        width: 80px;
        text-align: right;
        font-size: 14px;
        vertical-align: middle;
      }

      div {
        width: 210px !important;
        font-size: 12px;
        vertical-align: middle;
      }
    }

    .btn {
      margin-top: 30px;
      margin-left: 50px;
    }

  }

</style>
