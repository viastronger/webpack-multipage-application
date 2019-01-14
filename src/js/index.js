import 'rem'
import 'reset.css'
import '../css/index.less'
import '../html/index.html'
import common from 'common'
import post from "post"

const noIconUrl = require('../images/index/no_user.png'),
    iconUrl = require('../images/index/user_icon.png'),
    params = common.getUrlParams();
$('.free_charge').on('click', function () {
  if (params) {
    // 判断是否团员变团长
    post.PostApi('/activityOrder/share', {
      productOrderNo: params.productOrderNo
    }, res => {
      if (common.isIOS()) {
        window.webkit.messageHandlers.buyWithOther.postMessage({
          regimentRecordNo: '',
          regimentId: 1,
          productNo: 'pr181115170105000003',
        })
      }
      if (common.isAndroid()) {
        window.control.toEntityBuyResultAcivity(JSON.stringify(res))
      }
    })
  }else{
    if (common.isIOS()) {
      window.webkit.messageHandlers.buyWithOther.postMessage({
        regimentRecordNo: '',
        regimentId: 1,
        productNo: 'pr181115170105000003',
      })
    }
    if (common.isAndroid()) {
      window.control.buyActiveGoods('pr181115170105000003', '', 1)
    }
  }
})

post.PostApi('/activityOrder/queryRegimentRecordList', {
  regimentId: 1
}, res => {
  const list = res.data.list, length = list.length;
  let html = '';
  // 共有几人在拼团
  $('.all_person').html(res.data.total)
  // 如果超过两条拼团，就轮播
  if (length > 2) {
    const first = list[0], last = list[length - 1]
    list.push(first)
    list.unshift(last)
  }
  // 如果有数据，才有高度
  if (length > 0) {
    $('.list1').css('height', '2.4rem')
  }
  list.forEach(function (e, i) {
    html += `<div class="slide">
      <div class="left">${e.mobileNo}</div>
      <div class="right">
          <div class="time">
              <p>还差<span class="reamin">${e.remainMember}</span>人拼成</p>
              <p>剩余<span class="time_down"></span></p>
          </div>
          <a href="javascript:void(0)" data-id="${e.regimentRecordNo}" class="go_team_btn">参与拼团</a>
      </div>
    </div>`
  })
  $('.list1 .wrapper').html(html)
  // 去拼团按钮
  $('.go_team_btn').on('click', function () {
    const regimentRecordNo = $(this).attr('data-id');
    console.log(regimentRecordNo);
    goTeamPop(regimentRecordNo)
  })
  // 是否轮播
  if (length > 2) {
    const slideLength = $('.wrapper .slide').length
    let num = 1
    setInterval(function () {
      num++
      $('.list1 .wrapper').animate({
        'top': '-' + num * 1.2 + 'rem',
      }, function () {
        if (num == slideLength - 2) {
          num = 0
          $('.list1 .wrapper').css('top', '0')
        }
      })
    }, 3000)
  } else {
    $('.wrapper').css('top', '0')
    $('.look_more').css('display', 'none')
  }
  //倒计时
  $('.list1 .time_down').each(function (i, that) {
    common.TimeDown($(that), list[i].deadLine)
  })
  // 查看更多按钮
  // 如果前面为了轮播添加了，就删掉前面和后面一个元素，
  if (length > 2) {
    list.pop()
    list.shift()
  }
  $('.look_more').on('click', function () {
    let html2 = '<div class="title"></div><div class="wrapper">';
    list.forEach(function (e, i) {
      html2 += `<div class="slide">
        <div class="left">
          <img src="${iconUrl}" alt="">
          <div>
            <div class="mess">
                <span class="phone">${'*' + e.mobileNo.slice(-4)}</span>
                <span >还差<span class="reamin">${e.remainMember}</span>人</span>
            </div>
            <p class="time">剩余<span class="time_down"></span></p>
          </div>         
        </div>
        <div class="right">
            <a href="javascript:void(0)" data-id="${e.regimentRecordNo}" class="go_team_btn2">参与拼团</a>
        </div>
      </div>`
      if (i == 9) {
        html2 += `<div class="tips">仅显示10个正在拼单的人</div>`
      }
    })
    html2 += '</div>'
    const layerIndex = layer.open({
      type: 1,
      title: false,
      closeBtn: 1,
      shadeClose: true,
      scrollbar: false,
      skin: 'more_team',
      area: ['5.9rem'],
      content: html2,
      success: function () {
        $('.more_team .time_down').each(function (i, that) {
          common.TimeDown($(that), list[i].deadLine)
        })
        $('.go_team_btn2').on('click', function () {
          const regimentRecordNo = $(this).attr('data-id');
          layer.close(layerIndex)
          goTeamPop(regimentRecordNo)
        })
      }
    });
  })
})

// 去拼团弹窗
function goTeamPop(regimentRecordNo) {
  post.PostApi('/activityOrder/spellGroupShare', {
    regimentRecordNo: regimentRecordNo
  }, res => {
    let iconArr = [];
    const regimentRecordDTO = res.regimentRecordDTO
    let html3 = `<div class="body">
    <div class="title">参与<span>${regimentRecordDTO.leaderMobileNo}</span>的拼团</div>
    <div class="num">
        仅剩<span class="remain">${regimentRecordDTO.remainMember}</span>个名额，剩余<span class="time_down"></span>
    </div>
    <div class="icon">`;
    // 用户头像
    for (let i = 0; i < regimentRecordDTO.moblieNoList.length; i++) {
      iconArr.push({url: iconUrl, phone: regimentRecordDTO.moblieNoList[i]})
    }
    add(iconArr)
    iconArr.forEach(function (e, i) {
      html3 += `<div class="item">
        <img src="${e.url}" alt="icon">
        <span>${e.phone ? e.phone : ''}</span>
    </div>`
    })
    html3 += `</div>
      <a href="javascript:void(0)" class="join_team">参与拼团</a>
    </div>`

    layer.open({
      type: 1,
      title: false,
      closeBtn: 1,
      shadeClose: true,
      scrollbar: false,
      skin: 'go_team_pop',
      area: ['6rem'],
      content: html3,
      success: function () {
        common.TimeDown($('.go_team_pop .time_down'), regimentRecordDTO.deadLine)
        $('.join_team').on('click', function () {
          if (common.isIOS()) {
            window.webkit.messageHandlers.buyWithOther.postMessage({
              regimentRecordNo: regimentRecordDTO.regimentRecordNo,
              regimentId: 1,
              productNo: 'pr181115170105000003',
            })
          }
          if (common.isAndroid()) {
            window.control.buyActiveGoods('pr181115170105000003', regimentRecordDTO.regimentRecordNo, 1)
          }
        })
      }
    });
  })

}

//给用户头像数组添加无用户参加的头像url，补全5个
function add(arr) {
  if (arr.length < 5) {
    arr.push({url: noIconUrl})
    add(arr)
  }
  return arr
}

