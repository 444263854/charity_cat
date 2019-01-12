<template>
  <div class="journal">
    <div class="toggle_btn">
      <div class="btn_item left">
        <div class="inner_item">
          <router-link :to="{name:'journal_post_list'}" active-class="active_link">
            为喵星人寻找主人
          </router-link>
        </div>
        <div class="active_triangle" v-show="this.$route.path.match(/post/)"></div>
      </div>
      <div class="btn_item right">
        <div class="inner_item">
          <router-link :to="{name:'journal_record_list'}" active-class="active_link">
            我和喵星人的故事
          </router-link>
        </div>
        <div class="active_triangle" v-show="this.$route.path.match(/record/)"></div>
      </div>
    </div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
  export default {};

</script>

<style scoped lang="less">
  @import url("../../assets/styles/mix.less");

  .journal {
    width: 1000px;
    margin: 40px auto 0;

    .active_link {
      font-weight: 700;
    }

    .toggle_btn {
      overflow: hidden;
      margin-bottom: 10px;

      .btn_item {
        position: relative;
        width: 50%;
        box-sizing: border-box;

        .inner_item {
          text-align: center;
        }

        .active_triangle {
          width: 36px;
          height: 21px;
          background: @c-oragin;
          /*回退方案*/
          background: linear-gradient(45deg, transparent 14px, #fc8d59 0) left,
            linear-gradient(-45deg, transparent 14px, #fc8d59 0) right;
          background-size: 50% 100%;
          background-repeat: no-repeat;
          margin: 10px auto 0;
        }

        & a {
          font-size: 24px;
          line-height: 1;
          color: #6f6f6f;
          text-decoration: none;
        }
      }
    }

  }

</style>
