<template>
    <div class="shadowDiv">
        <div class="messageBox">
            <div class="Box_con_wrap">
               <div class="Box_content">{{text}}</div>
            </div>
               <button class="messageBox_btn" style="background:#fff;color:#6f6f6f" @click="clickHandler(false)">取消</button>
               <button class="messageBox_btn" @click="clickHandler(true)">确定</button>
        </div>
    </div>
</template>

<script>
var noop = ()=>{}
export default {
  name: "messageBox",
  props:{
    text:{
        type:[String],
        default:""
    },
    callback:{
        type:[Function],
        default:noop
    }
  },
  methods:{
    clickHandler(bool){
      document.body.removeChild(this.$el);
      this.callback(bool);
      this.$destroy();
    },
  }
}
</script>