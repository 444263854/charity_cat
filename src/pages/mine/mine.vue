<template>
  <div class="mine_info">
    <div class="sideBar">
      <span class="blod">设置</span>
      <ul class="menu">
        <router-link tag="li" :to="{name:'personInfo'}" active-class="router-active">个人资料</router-link>
        <router-link tag="li" :to="{name:'messgaeInfo'}" active-class="router-active">消息通知</router-link>
        <router-link tag="li" to="mine" active-class="router-active">我的收藏</router-link>
        <router-link tag="li" to="mine" active-class="router-active">关于领养</router-link>
      </ul>
    </div>
    <div class="view left">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {

  }

</script>


<style scope lang="less">
  @import url('../../assets/styles/mix.less');

  .router-active {
    color: #d73027 !important;
  }

  .mine_info {
    width: 1000px;
    margin: 40px auto 0;
    min-height: 640px;

    .sideBar {
      float: left;
      width: 160px;
      box-sizing: border-box;


      .blod {
        color: #333;
        font-size: 16px;
        font-weight: 600;
        display: block;
      }

      .menu li {
        font-size: 14px;
        line-height: 1;
        color: @text-color;
        margin-top: 15px;
        cursor: pointer;
      }
    }

    //sideBar 
    .view {
      width: 840px;
      box-sizing: border-box;
    }

  }

</style>
