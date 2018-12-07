import 'rem'
require('reset.css')
import '../css/index2.css'
import '../html/index2.html'


const a = {
    loginAccount: 'admin1',
    password: '123456'
};
$.ajax({
  url: 'journalismApi',
  contentType: "application/json;charset=utf-8",
  type: 'get',
  dataType: "json",
  data:{},
  success: function (res) {
    console.log(res);
  }
})
console.log(moment().format());