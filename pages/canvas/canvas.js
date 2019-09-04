// pages/canvas/canvas.js
const app = getApp();
// 获取屏幕宽度
const windowWidth = wx.getSystemInfoSync().windowWidth;
// 使用 wx.createContext 获取绘图上下文 context
let context = wx.createCanvasContext('firstCanvas');
function setTitle(title) {
  // 绘制标题
  context.setFontSize(20);
  context.setFillStyle('#333');
  context.fillText(title, 40, 60);
}
function setLabel(numberLabel) {
  // 绘制 desc
  context.setFontSize(10);
  context.setFillStyle('#999')
  context.fillText(numberLabel, 43, 95);
}
function setNumber(number, numberColor) {
  // 绘制数字
  context.setFontSize(40);
  context.setFillStyle(numberColor)
  context.fillText(number, 40, 135);
}
function setDate(date) {
  // 绘制目标日
  context.setFontSize(10);
  context.setFillStyle('#999')
  context.fillText('目标日：' + date, 43, 165);
}
function setRectAndQrcode() {
  // 绘制背景
  context.setFillStyle('#fff');
  context.setShadow(5, 5, 12, '#999');
  context.fillRect(20, 20, windowWidth - 40, 160);
  context.setShadow(0, 0, 0, '#fff');
  // 绘制二维码
  context.drawImage('./bytefactory.jpg', windowWidth - 145, 55, 100, 100);
}
function drawCard(title, date, number, isPast) {
  var numberLabel = isPast === true ? '已过天数' : '剩余天数';
  var numberColor = isPast === true ? '#3cc51f' : '#e64340';

  setRectAndQrcode();
  setTitle(title);
  setLabel(numberLabel);
  setNumber(number, numberColor);
  setDate(date);
  // 绘制
  context.draw();
}
function clearDate() {
  context.clearRect(43, 165, windowWidth / 2, 20);
}
Page({
  /**
   * 页面的初始数据
   */
  data: {
    date: '1949-10-01',
    title: '新中国成立',
    isPast: true,
    number: 25540,
    isLoading: false,
    isDisable: false
  },
  switchChange: function (e) {
    var value = e.detail.value;
    if (value) {
      clearDate();
      drawCard(this.data.title, this.data.date, this.data.number, this.data.isPast);
    } else {
      clearDate();
      drawCard(this.data.title, 'xxxx-xx-xx', this.data.number, this.data.isPast);
    }
  },
  saveToImg: function () {
    console.log('say you say me');
    this.setData({
      isLoading: true
    });
    wx.canvasToTempFilePath({
      canvasId: 'firstCanvas',
      fileType: 'jpg',
      quality: 1,
      success: res => {
        wx.saveImageToPhotosAlbum({
          filePath: res.tempFilePath,
          success: res => {
            this.setData({
              isLoading: false,
              isDisable: true
            });
            wx.showToast({
              title: '保存成功'
            })
          }
        });
      },
      fail: function (err) {
        console.log(err);
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
    drawCard(this.data.title, this.data.date, this.data.number, this.data.isPast);
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