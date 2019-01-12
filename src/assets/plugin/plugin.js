import '../styles/messageBox.css'
import '../styles/loading.less'
let messageBox = {
  install(Vue, options) {
    Vue.prototype.$messageBox = function (text, callback = () => {}) {
      let shadowDiv = document.createElement('div'),
        mBoxDiv = document.createElement('div'),
        textWrap = document.createElement('div'),
        text_con = document.createElement('div'),
        btn_confirm = document.createElement('button'),
        btn_cancel = document.createElement('button');

      shadowDiv.className = 'shadowDiv'
      mBoxDiv.className = 'messageBox'
      textWrap.className = 'Box_con_wrap'
      text_con.innerText = text
      text_con.className = 'Box_content'
      textWrap.appendChild(text_con)
      mBoxDiv.appendChild(textWrap)

      btn_confirm.innerText = '确定'
      btn_confirm.className = 'messageBox_btn'
      btn_cancel.innerText = '取消'
      btn_cancel.className = 'messageBox_btn'
      btn_cancel.style.background = '#fff'
      btn_cancel.style.color = '#6f6f6f'

      btn_confirm.onclick = function () {
        document.body.removeChild(shadowDiv)
        callback(true)
      }
      btn_cancel.onclick = function () {
        document.body.removeChild(shadowDiv)
        callback(false)
      }
      mBoxDiv.appendChild(btn_confirm)
      mBoxDiv.appendChild(btn_cancel)
      shadowDiv.appendChild(mBoxDiv)
      document.body.appendChild(shadowDiv)
    }
  }
}
let format = {
  install(Vue, options) {
    /**
     * 
     * @param {Date} date  需要格式化的日期 
     * @param {String} str 格式化的模板
     * 
     * yyyy 表示年
     * mm 表示月
     * dd 表示天
     * hh 表示小时
     * ff 表示分钟，由于mm表示月，所以minutes用ff表示，此处可用断言，但是为保证灵活性，不设置断言比较好
     * ss 表示毫秒
     * 
     * 为保证灵活性，没有设置固定的模板，除了上述表示特定的意思字符会被替换成相应的时间外，模板中其他的字符都会保留
     */
    Vue.prototype.$format = function format(date, str) {
      if (!(date instanceof Date)) {
        throw new Error('date is not the type of Date')
      }
      var year,
        month,
        day,
        hours,
        minutes,
        seconds,
        result,
        str = str.toLocaleLowerCase()

      year = date.getFullYear();
      month = date.getMonth() + 1;
      day = date.getDate();

      hours = date.getHours();
      minutes = date.getMinutes();
      seconds = date.getSeconds();


      month = month < 10 ? '0' + month : month;
      day = day < 10 ? '0' + day : day;
      hours = hours < 10 ? '0' + hours : hours;
      minutes = minutes < 10 ? '0' + minutes : minutes;
      seconds = seconds < 10 ? '0' + seconds : seconds;

      result = str.replace(/yyyy/, year);
      result = result.replace(/mm/, month);
      result = result.replace(/dd/, day);

      result = result.replace(/hh/, hours);
      //后面紧跟着:(冒号)才匹配
      result = result.replace(/ff/, minutes);
      result = result.replace(/ss/, seconds);

      return result;
    }
  }
}
let loading = {
  install(Vue, options) {
    Vue.prototype.$loading = {
      addLoading: function (target) {
        if (target instanceof HTMLElement) {
          var left = target.offsetLeft,
            top = target.offsetTop,
            width = target.offsetWidth,
            height = target.offsetHeight;
        } else {
          throw new Error('target is not the type of HTMLElement ')
        }
      },
      removeLoading: function (target) {

      }
    }
  }
}


export {
  messageBox,
  loading,
  format
}
