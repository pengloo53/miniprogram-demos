// pages/clouddatabase/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 初始化数据库
    const db = wx.cloud.database();
    // 获得 history 集合对象
    const db_history = db.collection('history');
    // 引入 dayjs
    const dayjs = require('dayjs');
    const TODAY = dayjs().format('YYYY-MM-DD');
    db_history.where({
      date: TODAY
    }).get().then( res => {
      console.log(res);
      let result = res.data;
      if(result.length){
        this.setData({
          lists: result[0].lists
        });
      }else{
        wx.cloud.callFunction({
          name: 'history_save',
          data: {
            today: TODAY,
            env: getApp().globalData.env
          },
          complete: res => {
            console.log(res);
            this.setData({
              lists: res.result.lists
            });
          }
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.setNavigationBarTitle({
      title: '云数据库使用',
    })
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