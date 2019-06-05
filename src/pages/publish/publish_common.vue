<template>
  <div class="publish_deital">
    <div class="cicle"></div>
    <div class="r_con">
      <label for="title" class="title_label">标题:</label>
      <Base-Input name="title" v-model="title"></Base-Input>
      <quill-editor ref="myTextEditor" v-model="content"></quill-editor>
      <div class="add_pic">
        <div class="add_list">
          <Base-Button class="btn_sel_pic" @click="addFile">点击添加图片</Base-Button>
          <input type="file" name="pic" multiple accept="image/*" style="display:none" ref="fileIpt" @change="selFileHandler">
          <ul>
            <li v-for="(imgFile, index) in  imgURLList" :key="index" :class="{active:activeIndex == index}" @click="show_Img(imgFile.dataUrl,index)">
              <img :src="imgFile.dataUrl">
            </li>
          </ul>
        </div>
        <div class="show_pic">
          <img :src="show_img_URL" v-if="show_pic">
          <span class="iconfont" @click="delete_pic_Handler" v-show="show_pic" title="删除该图片">&#xe6b4;</span>
        </div>
        <div class="clear"></div>

        <div class="sel_location">
          <span class="iconfont">&#xe64c;</span>
          所在位置
        </div>

        <div class="publish_btn_wrap">
          <Base-Button class="publish_btn" @click="publish_btnHandler">发布</Base-Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    quillEditor
  } from "vue-quill-editor";

  function imgFile(url, name, size) {
        this.dataUrl = url;
        this.name = name;
        this.sizes = size;
      }

  export default {
    props: {
      /**
       * 图片上传的接口地址
       */
      category: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        show_img_URL: "",
        activeIndex: 0,
        imgURLList: [],
        title: "",
        content: ""
      };
    },
    computed: {
      /**
       * 右边图片和删除按钮是否显示的开关
       */
      show_pic() {
        return this.imgURLList.length > 0;
      }
    },
    methods: {
      /**
       * 点击添加文件，触发隐藏的input[type=file]的点击事件
       */
      addFile() {
        this.$refs["fileIpt"].click();
      },
      /**
       * 选择需要上传的图片
       */
      selFileHandler(e) {
        let files = e.target.files,
          loadedLen = this.imgURLList.length,
          blankLen = 9 - loadedLen;
        if (blankLen <= 0) {
          this.$messageBox("图片不能超过9张");
          return;
        }
        let len = blankLen > files.length ? files.length : blankLen;
        for (let i = 0; i < len; i++) {
          const file = files[i];
          let reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = e => {
            this.compressImg(e.target.result).then(result => {
              if (this.imgURLList.length == 0) {
                this.show_img_URL = result;
              }
              this.imgURLList.push(
                new imgFile(result, file.name, file.sizes)
              );
            });
          };
        }
      },
      compressImg(source) {
        return new Promise((resolve, reject) => {
          let canvas = document.createElement("canvas"),
            ctx = canvas.getContext("2d"),
            image = new Image();
          image.src = source;
          image.onload = function () {
            let width = image.width,
              height = image.height;
            //宽高都小于400,大小小于1M
            if (width <= 400 && height <= 400 && image.sizes > 1000000) {
              canvas.width = width;
              canvas.height = height;
              ctx.drawImage(image, 0, 0, width, height);
              resolve(canvas.toDataURL());
            } else if (width > 400 || height > 400) {
              if (width >= height) {
                canvas.width = 400;
                canvas.height = (height * 400) / width;
              } else {
                canvas.width = (width * 400) / height;
                canvas.height = 400;
              }
              ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
              resolve(canvas.toDataURL());
            } else {
              resolve(source);
            }
          };
        });
      },
      
      /**
       * 展示图片
       */
      show_Img(src, index) {
        this.show_img_URL = src;
        this.activeIndex = index;
      },
      /**
       * 删除图片
       */
      delete_pic_Handler() {
        for (let i = 0; i < this.imgURLList.length; i++) {
          const imgFile = this.imgURLList[i];
          if ((imgFile.dataUrl = this.show_img_URL)) {
            this.imgURLList.splice(i, 1);
            break;
          }
        }
        //删除图片后，默认显示第一张图片
        if (this.imgURLList.length > 0) {
          this.show_img_URL = this.imgURLList[0].dataUrl;
          this.activeIndex = 0;
        } else {
          this.show_img_URL = null;
        }
      },
      /**
       * 发送图片，File类型
       */
      publish_btnHandler() {
        if (this.imgURLList == [] || this.title == "" || this.content == "") {
          this.$messageBox("内容和图片不能为空");
          return;
        }
        //ajax  发送图片和文章
        this.axios
          .post( '/article/saveArticle', {
            title: this.title,
            imgList: this.imgURLList,
            content: this.content,
            category: this.category
          })
          .then(res => {
            if (res.data.status == 200) {
              this.show_img_URL = "";
              this.activeIndex = 0;
              this.imgURLList = [];
              this.title = "";
              this.content = "";
            }
            this.$messageBox(res.data.msg);
          });
      }
    },
    components: {
      quillEditor
    }
  };

</script>

<style scope lang="less">
  .publish_deital {
    width: 1080px;
    overflow: hidden;

    .cicle {
      border-radius: 50%;
      background: #aaa;
      float: left;
      margin-right: 40px;
      width: 80px;
      height: 80px;
    }

    .r_con {
      width: 960px;
      box-sizing: border-box;
      float: right;

      .title_label {
        font-size: 18px;
        display: inline-block;
        vertical-align: top;

        &+div {
          width: 900px;
        }
      }

      .add_pic {
        width: 100%;
        margin-top: 20px;

        .btn_sel_pic {
          width: 120px;
          height: 30px;
          font-size: 14px;
          clear: both;
        }

        .add_list {
          width: 390px;
          float: left;

          & ul {
            width: 330px;
            margin: 0 150px 0 90px;

            .active {
              box-shadow: 0 0 0 1px #fc8d59;
            }

            li {
              width: 80px;
              height: 80px;
              float: left;
              margin-right: 30px;
              margin-top: 30px;
              overflow: hidden;
              cursor: pointer;
              box-sizing: border-box;
              box-shadow: 0px 0px 1px 0 #aaa;

              &>img {
                height: inherit;
                // height: inherit;
              }
            }
          }
        }

        //add_list_pic
        .show_pic {
          float: right;
          width: 400px;
          height: 400px;
          overflow: hidden;
          margin-right: 20px;
          position: relative;
          box-shadow: 0 0 1px 0 #aaa;

          &>img {
            box-shadow: 1px 1px 1px 0 #aaa;
          }

          .iconfont {
            position: absolute;
            right: 0;
            bottom: 0;
            background: rgba(200, 200, 200, 0.3);
            cursor: pointer;
            font-size: 28px;
            line-height: 1.2;
            color: red;
          }
        }

        //show_pic
        .sel_location {
          height: 50px;
          width: 500px;
          box-sizing: border-box;
          border: 1px solid #ccc;
          border-radius: 5px;
          margin-top: 30px;
          padding: 0 10px;
          font-size: 14px;
          line-height: 50px;
          color: #333;
          cursor: pointer;

          .iconfont {
            font-size: 28px;
            color: red;
          }
        }

        //sel_location
        .publish_btn_wrap {
          text-align: center;
          margin-top: 20px;

          .publish_btn {
            height: 60px;
            width: 500px;
            font-size: 30px;
            font-family: "PingFang-SC-Blod", "PingFang-SC-Regular";
            font-weight: 500;
          }
        }
      }

      //add_pic
    }

    ///r_con
  }

</style>
