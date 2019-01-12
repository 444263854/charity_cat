<template>
  <label class="Base_radio">
    <span class="radio_inner" :class="{ischecked:isChecked}">
      <input type="radio" :value="value" :name="name" :checked="isChecked" @change="$emit('change', $event.target.value)">
    </span>
    <span>
      <slot></slot>
    </span>
  </label>
</template>
<script>
  export default {
    inheritAttrs: false,
    model: {
      prop: 'modelVal',
      event: 'change'
    },
    props: {
      modelVal: {
        type: [Boolean, Number, String],
        default: false
      },
      name: {
        type: [String, Number],
        default: ''
      },
      value: {
        type: [String, Number, Boolean],
        default: ''
      }
    },
    computed: {
      isChecked() {
        return this.modelVal == this.value;
      },
    },
  }

</script>

<style scoped lang='less'>
  @import url('../assets/styles/mix.less');

  .Base_radio {
    white-space: nowrap;
    cursor: pointer;
    font-size: 14px;
    height: 30px;
    line-height: 30px;
    display: inline-block;
    vertical-align: top;

    &+& {
      margin-left: 10px;
    }

    input[type="radio"] {
      position: relative;
      width: 20px;
      height: 20px;
      outline: none;
      opacity: 0;
      z-index: -10;
    }

    span {
      vertical-align: middle;
    }

    .radio_inner {
      box-sizing: border-box;
      position: relative;
      width: 20px;
      height: 20px;
      border-radius: 4px;
      display: inline-block;
      background: @c-lightBule+#111;
      vertical-align: middle;
      border: 1px solid @c-deepBlue;
    }

    .ischecked {
      background: #409eff;
      border-color: #409eff;

    }

    .ischecked::after {
      display: block;
      position: absolute;
      left: 6px;
      top: 2px;
      content: '';
      width: 5px;
      height: 10px;
      border: 2px solid #fff;
      border-left: none;
      border-top: none;
      transform: rotate(45deg);
    }

  }

</style>
