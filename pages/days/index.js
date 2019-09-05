// pages/days/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date: '2019-10-01',
    title: '新中国成立 70 周年',
    isPast: false,
    number: 26
  },
  goto: function(e){
    let date = e.currentTarget.dataset.date;
    let title = e.currentTarget.dataset.title;
    let isPast = e.currentTarget.dataset.ispast; // 注意这里的参数名
    let number = e.currentTarget.dataset.number;
    console.log(e.currentTarget.dataset); // 打印出来试试
    wx.navigateTo({
      url: '../canvas/canvas?title=' + title + '&date=' + date + '&isPast' + isPast + '&number=' + number
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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