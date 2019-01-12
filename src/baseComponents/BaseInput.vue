<template>
  <div class="Base_input" :class="{foucs:isFocus}" @click="getFocus">
    <slot name="prepend"></slot>
    <input :type="IptType" :name='name' @focus="onFocus" @blur="onBlur" :placeholder="placeHolder" ref='Base_input'
      :value="value" @input="$emit('input',$event.target.value)">
    <slot name="append"></slot>
  </div>
</template>

<script>
  export default {
    inheritAttrs: false,
    props: {
      value: {
        default: ''
      },
      type: {
        type: String,
        default: 'text'
      },
      placeHolder: {
        type: String,
        default: ''
      },
      name: {
        type: [String, Number],
        default: ''
      }
    },
    data() {
      return {
        isfocus: false,
      }
    },
    computed: {
      IptType() {
        return this.type;
      },
      isFocus() {
        return this.isfocus;
      }
    },
    methods: {
      getFocus() {
        this.$refs['Base_input'].focus();
      },
      onFocus() {
        this.isfocus = true;
      },
      onBlur() {
        this.isfocus = false;
      }
    }
  }

</script>

<style scoped lang='less'>
  @import url('../assets/styles/mix.less');

  .Base_input {
    position: relative;
    display: inline-block;
    box-sizing: border-box;
    width: 180px;
    height: 30px;
    font-size: 14px;
    border: 1px solid @c-seaBlue;
    border-radius: 6px;
    overflow: hidden;

    input {
      box-sizing: border-box;
      background: #fff;
      border: none;
      width: inherit;
      height: inherit;
      line-height: 30px;
      padding: 0 30px 0 10px;
      font-size: inherit;
      outline: none;
      color: #606266; //   vertical-align: middle;

      &:focus {
        outline: none;
      }
    }
  }

  .foucs {
    border-color: #409eff;
    transition: border-color .2s;
  }

</style>
