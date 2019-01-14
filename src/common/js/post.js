function Post(host, code202) {
  var t = this
  this.host = host;
  this.code202 = code202;
  this.PostApi = function (url, data, successCallback, errorCallback) {
    if (data instanceof String) {
      try {
        data = JSON.parse(data)
      } catch (e) {

      }
    }
    $.ajax({
      url: host + url
      , type: 'POST'
      , dataType: 'json'
      , beforeSend: function (xhr) {
        xhr.setRequestHeader("Content-Type", 'application/json; charset=UTF-8');
      }
      //xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=utf-8");
      , data: JSON.stringify(data)
      , success: function (result, msg, status) {
        // console.log(status)
        if (result.success) {
          successCallback(result, msg, status);
        } else {
          errorCallback && errorCallback(result);
        }
      }
      , error: function (result, msg, status) {

      }
    })
  }

  this.Get = function (url, successCallback) {
    $.get(url, successCallback)
  }
}
export default new Post(location.origin + '/v1', {
  1: function (result) {
    layer.msg(result.Message);
  }
})
