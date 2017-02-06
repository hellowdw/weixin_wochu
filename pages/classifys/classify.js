import util from '../../utils/util.js'
import api from '../../api/api.js'
import {categoryListArray,commodityListArray} from '../../utils/json.js'

Page({
  data: {
    deviceWidth: 0,
    deviceHeight: 0,
    categoryList: [], //一级分类
    commodityList: [], //商品列表
    curNav: 0,
		curIndex: 0
  },
  onLoad: function (options) {
    var that = this;
    // 页面初始化 options为页面跳转所带来的参数
    util.getSystemInfo({
      success: (res) => {
        that.setData({
          deviceWidth: res.windowWidth,
          deviceHeight: res.windowHeight,
          categoryList: categoryListArray,
          commodityList: commodityListArray
        });
      }
    });  

  },
  onReady: function () {
    // 页面渲染完成
    wx.setNavigationBarTitle({
      title: '分类',
      success: function (res) {
        // success
      }
    })
  },
  

  //事件处理函数
  tapCategory: function(e) {
      var that = this
      var id = e.target.dataset.id;
      var	index = parseInt(e.target.dataset.index);
      this.setData({
        curNav: index,
        curIndex: id,
        navRightItems: []
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
})