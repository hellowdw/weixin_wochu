import api from '../../api/api.js'

Page({
  data: {
    deliveryTime: [], //
    shippingTimeList: []
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
     this.loadTopViewData ();
  },
  onReady: function () {
    // 页面渲染完成
    wx.setNavigationBarTitle({
      title: '购物车',
      success: function (res) {
        // success
      }
    })


  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },
  loadTopViewData: function () {
    var that = this;
    api.getShippingDateList({
      data: {
        parameters: { deviceId: "dfjhkdcnkdfkkdsncpp123idfod" }
      },
      success: (res) => {
        console.log(res)
        if (res.data.data) {
          // success
          that.setData({
            deliveryTime: res.data.data.shippingDateList
          });

          //选中默认值
          for (let i = 0; i < res.data.data.shippingDateList.length; i++) {
            var object = res.data.data.shippingDateList[i];
            if (object.isEnable == '1' && object.isCheck == '1') {
              that.setData({
                shippingTimeList: object.shippingTimeList,
              })
            }
          }

          that.setTopViewUI(res.data.data.shippingDateList);
        }
      }
    })
  }
  , setTopViewUI: function (data) {

  }
  , tapShippingWeek: function (event) {
    var that = this;
    console.log(event);
    if (event.target.dataset.shippingtimelist) {
      that.setData({
        shippingTimeList: event.target.dataset.shippingtimelist,
      })
      //  this.loadTopViewData ();
    }
  },
  tapShippingTime:function (event) {
    
  }
})