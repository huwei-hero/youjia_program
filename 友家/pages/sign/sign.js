// pages/sign/sign.js
Page({
  data: {
    position:"122.4,37.1",
    item:"晚自习"
  },

  onLoad: function (options) {

  },
  sign:function(res){
   
  },
  faceCheck:function(res){
   
  },
  getFace:function(res){
    const ctx = wx.createCameraContext()
    ctx.takePhoto({
      success: (res) => {
        this.setData({ src: res.tempImagePath })
      }
    })
  }
})