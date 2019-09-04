// pages/address/address.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lists: [
      {
        title: '我的家乡',
        address: '湖北武汉'
      },{
        title: '我的学校',
        address: '河北工业大学'
      }
    ]
  },
  add: function () {
    wx.chooseLocation({
      success: res => {
        var address = {
          title: res.name,
          address: res.address,
          latitude: res.latitude,
          longitude: res.longitude
        }
        this.data.lists.push(address);
        this.setData({
          lists: this.data.lists
        });
        wx.setStorage({
          key: "address_lists",
          data: this.data.lists
        })
      }
    })
  },
  gotoLocation: function (e) {
    var latitude = e.currentTarget.dataset.latitude;
    var longitude = e.currentTarget.dataset.longitude;
    var name = e.currentTarget.dataset.title;
    var address = e.currentTarget.dataset.address;
    wx.openLocation({
      latitude,
      longitude,
      name,
      address,
      scale: 15
    })
  },
  del: function(e){
    let index = e.currentTarget.dataset.index;
    wx.showModal({
      title: '确认删除？',
      content: '删除后，将不可恢复',
      success: res => {
        if(res.confirm){
          this.data.lists.splice(index, 1);
          this.setData({
            lists: this.data.lists
          });
          wx.setStorage({
            key: 'address_lists',
            data: this.data.lists,
          })
        }
      }
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
    wx.getStorage({
      key: 'address_lists',
      success: res => {
        this.setData({
          lists: res.data
        })
      },
    })
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