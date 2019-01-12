<template>
  <button :class="bgClass" @click="$emit('click',$event)">
    <slot></slot>
  </button>
</template>
<script>
  export default {
    props: {
      type: String
    },
    data() {
      return {
        bgType: this.type,
      }
    },
    computed: {
      bgClass() {
        switch (this.bgType) {
          case 'plain':
            return 'plain';
            break;
          case 'noround':
            return 'noround';
            break;
          case 'text':
            return 'text';
            break;
          default:
            return 'default_btn';
            break;
        }
      }
    },
  }

</script>
<style scoped lang='less'>
  @import url('../assets/styles/mix.less');

  button {
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    font-size: 14px;

    border: 1px solid @c-oragin;
    color: #fff;
    background: @c-oragin;
    padding: 8px;
    border-radius: 4px;
  }

  .default_btn {
    &:hover {
      background: @c-oragin;
      color: #fff;
    }

    &:active {
      opacity: 0.7;
      color: #fff;
    }
  }

  .plain {
    background: #fdf6ec;
    color: @c-oragin;

    &:active {
      background: @c-oragin;
      opacity: 0.7;
      color: #fff;
    }

    &:hover {
      background: @c-oragin;
      color: #fff;
    }
  }

  .noround {
    background: #fff;
    color: @c-oragin;

    &:active {
      background: @c-oragin;
      opacity: 0.7;
      color: #fff;
    }

    &:hover {
      background: @c-oragin;
      color: #fff;
    }
  }

  .text {
    border: none;
    padding: 0;
    margin: 0;
    background: #fff;
    color: #000;
  }

</style>
