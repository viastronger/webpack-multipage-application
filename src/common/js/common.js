/*
* 公共方法
* */
import moment from "moment"

export default {
  reg: {
    phoneReg: /^1[0-9]{10}$/,
    numberReg: /^\d+$/,
    pwdReg: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,15}$/,
    chineseNameReg: /^[\u4e00-\u9fa5]{2,}$/,
    tradeReg: /^\d{6}$/,
    idCardReg: /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/
  },
  //手机号马赛克
  mskPhone: function (phone) {
    return phone.slice(0, 3) + '****' + phone.slice(-4)
  },
  getUrlParams: function () {
    if (location.search) {
      var url = location.href.split('?')[1];
      url = url.split('&')
      var params = {};
      url.forEach(function (e, i) {
        var arr = e.split('=')
        params[arr[0]] = arr[1]
      })
      return params
    }
    return false
  },
  getUrlParam: function (str, type) {
    if (typeof str != 'string') {
      return false;
    }
    var url = location.href;
    if (url.indexOf('?') < 0) {
      return false;
    }
    if (url.indexOf(str) < 0) {
      return false;
    }
    var strIndex = url.indexOf(str) - 0 + str.length + 1;
    if (strIndex < 0) {
      return false;
    }
    var strArr = url.slice(strIndex)
    var param = strArr.split('&')[0];
    if (type == 1) {//解密
      param = decodeURIComponent(param);
    }
    return param;
  },
  milliFormat: function (s) {//添加千位符
    if (/[^0-9\.]/.test(s)) return "invalid value";
    if (((s + '').indexOf('.') != -1) == false) {
      s += ".00";
    }
    s = s.replace(/^(\d*)$/, "$1.");
    s = (s + "00").replace(/(\d*\.\d\d)\d*/, "$1");
    s = s.replace(".", ",");
    var re = /(\d)(\d{3},)/;
    while (re.test(s)) {
      s = s.replace(re, "$1,$2");
    }
    s = s.replace(/,(\d\d)$/, ".$1");
    return s.replace(/^\./, "0.");
  },
  search: function (name, type) {
    //if(!location.search){
    //	return '/indexToo.view';
    //}
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
      return decodeURI(r[2]);

    } else {
      return null;
    }
  },

  checkIdCardNo: function (idCardNo) {
    if (idCardNo.length == 15) {
      return true;
    } else if (idCardNo.length == 18) {
      return true;
    } else {
      return false;
    }

  },
  /***按钮变色
   * btnEle 需要变色的按钮
   * flag 控制变色的状态
   */
  checkBtnChange: function (btnEle) {
    var btnEle = btnEle || "button";
    var flag = true;
    $('input').each(function (i, e) {
      if ($(this).val() == '') {
        flag = false;
        return false;
      }
      if (i == $('input').length - 1) {
        flag = true;
      }
    })
    if (flag) {
      //启用按钮
      $(btnEle).css({
        color: '#ffffff',
        backgroundColor: '#F43B45'
      }).attr('disabled', false)
    } else {
      //禁用按钮
      $(btnEle).css({
        color: '#828282',
        backgroundColor: '#ededed'
      }).attr('disabled', 'disabled')
    }
  },
  TimeDown: function (ele, endtime) {
    const that = this
    //结束时间
    // endtime = moment(endtime).format();
    //当前时间
    var nowDate = moment().valueOf();
    //相差的总秒数
    var totalSeconds = parseInt((endtime - nowDate) / 1000);
    if (totalSeconds == 0) {
      ele.html("00:00:00后结束")
      return
    } else if (totalSeconds < 0) {
      ele.html("已结束")
      return
    }
    //天数
    // var days = Math.floor(totalSeconds / (60 * 60 * 24));
    //取模（余数）
    var modulo = totalSeconds % (60 * 60);
    //小时数
    var hours = Math.floor(totalSeconds / (60 * 60)) + '';
    if (hours.length < 2) {
      hours = '0' + hours
    }
    modulo = modulo % (60 * 60);
    //分钟
    var minutes = Math.floor(modulo / 60) + '';
    if (minutes.length < 2) {
      minutes = '0' + minutes
    }
    //秒
    var seconds = modulo % 60 + '';
    if (seconds.length < 2) {
      seconds = '0' + seconds
    }
    //秒后面的毫秒
    var count = Math.floor(parseInt((endtime - nowDate)) % 1000 / 100);
    //输出到页面
    ele.html(hours + ":" + minutes + ":" + seconds + "." + count)

    //延迟100毫秒执行自己
    setTimeout(function () {
      that.TimeDown(ele, endtime);
    }, 100)
  },
  isIOS: function () {
    var u = navigator.userAgent;
    var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    return isiOS
  },
  isAndroid: function () {
    var u = navigator.userAgent;
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
    return isAndroid
  }
}
