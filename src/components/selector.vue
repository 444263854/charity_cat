<template>
  <form ref="condition_form">
    <div class="row">
      <div class="form_item">
        <label class="form_label">城市</label>
        <Base-Input v-model="formData.cityValue" name='city'>
        </Base-Input>
      </div>
      <div class="form_item">
        <label class="form_label">年龄段</label>
        <Base-Input v-model="formData.ageValue" name='age'>
          <div slot="append" class="plus_pic text_middle">
            <span class="iconfont">&#xea05;</span>
          </div>
        </Base-Input>
      </div>
      <div class="form_item">
        <slot name="reset"></slot>
      </div>
    </div>
    <div class="row">
      <div class="form_item">
        <label class="form_label">性别</label>
        <Base-Radio v-model="formData.sex" value='公猫' name='sex'>公猫</Base-Radio>
        <Base-Radio v-model="formData.sex" value='母猫' name='sex'>母猫</Base-Radio>
        <Base-Radio v-model="formData.sex" value='不明' name='sex'>不明</Base-Radio>
      </div>
      <div class="form_item form_item_health">
        <label class="form_label">健康状况</label>
        <Base-Radio v-model="formData.healthCondition" value='health_01' name="healthCondition">健康</Base-Radio>
        <Base-Radio v-model="formData.healthCondition" value='health_02' name="healthCondition">一般</Base-Radio>
        <Base-Radio v-model="formData.healthCondition" value='health_03' name="healthCondition">较弱</Base-Radio>
        <Base-Radio v-model="formData.healthCondition" value='health_04' name="healthCondition">小疾</Base-Radio>
        <Base-Radio v-model="formData.healthCondition" value='health_05' name="healthCondition">残疾</Base-Radio>
      </div>
      <div class="form_item">
        <slot name="search"></slot>
      </div>
    </div>
  </form>
</template>

<script>
  export default {
    props: {
      formData: {
        type: Object,
        default: {}
      }
    }, //props
    data() {
      return {
        data: {
          cityValue: '',
          ageValue: '',
          healthCondition: '',
          sex: ''
        }
      }
    }, //data

  }

</script>

<style scoped lang="less">
  @import url('../assets/styles/mix.less');

  form {
    display: table;

    .row {
      display: table-row;

      &> :last-child {
        width: 370px;
        text-align: right;
      }

      .form_item {
        display: table-cell;
        font-size: 20px;
        color: @c-deepBlue;
        font-weight: 500;
        height: 30px;
        line-height: 30px;
        vertical-align: top;
        min-width: 310px;

        .form_label {
          .left;
          text-align: left;
          padding: 0 12px 0 10px;
          box-sizing: border-box;
        }

        .plus_pic {
          box-sizing: border-box;
          position: absolute;
          cursor: pointer;
          top: 0;
          right: 0;
          height: 28px;
          line-height: 28px;
          display: block;

          span {
            font-size: 22px;
            color: @c-seaBlue;
          }

          span:last-of-type {
            transform: rotate(90deg);
          }
        }
      }

      //end form_item

      .form_item_health {
        min-width: 430px;
      }
    }

    //row 
  }

</style>
