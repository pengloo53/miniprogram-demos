// pages/request/index.js
const { showapi_appid, showapi_sign } = require('./self.config.js');
const request_data = function(callback) {
  wx.request({
    url: 'https://route.showapi.com/119-42',
    data: {
      showapi_appid,
      showapi_sign
    },
    header: {
      'content-type': 'application/json'
    },
    success: res => {
      var showapiData = res.data.showapi_res_body.list;
      callback(showapiData);
    }
  })
}
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lists: [
      {
        title: '你好呀',
        date: '你好呀'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '加载中'
    })
    request_data(res => {
      this.setData({
        lists: res
      });
      wx.hideLoading();
      // wx.setStorage({
      //   key: 'historyList',
      //   data: {
      //     date: that.data.currentDate,
      //     list: showapiData
      //   }
      // })
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})