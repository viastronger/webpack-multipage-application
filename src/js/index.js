import 'rem'
import 'reset.css'
import '../css/index.css'
import '../html/index.html'

const fun = () => {
  console.log(3);
}
fun()
const a = {
  loginAccount: 'admin1',
  password: '123456'
};

$.ajax({
  url: 'accountManageController/login',
  contentType: "application/json;charset=utf-8",
  type: 'post',
  dataType: "json",
  data: JSON.stringify(a),
  success: function (res) {
    console.log(res);

  }
})
console.log(moment().format());
