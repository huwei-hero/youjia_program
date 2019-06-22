// pages/home/home.js
Page({
  data: {
    username:"胡威",
    swiper_img:[
      "/images/logo.png",
      "/images/logo.png",
      "/images/logo.png"
    ],
    icon:[
      {
        id: 1,
        name:"request_leave",
        img: "/images/logo.png",
        text:"请假"
      },
      {
        id: 2,
        name:"sign",
        img: "/images/logo.png",
        text: "签到"
      },
      {
        id: 3,
        name:"shop",
        img: "/images/logo.png",
        text: "商城"
      },
      {
        id: 4,
        name:"message",
        img: "/images/logo.png",
        text: "信息"
      },
      {
        id: 5,
        name:"my",
        img: "/images/logo.png",
        text: "测试"
      },
      {
        id: 6,
        name:"my",
        img: "/images/logo.png",
        text: "测试"
      }
    ]
  },

  onLoad: function (options) {

  },
  go:function(res){
    var index = res.currentTarget.id;
    var name = this.data.icon[index-1].name;
    console.log('/pages/' + name + '/' + name)
    wx.navigateTo({
      url: '/pages/' + name + '/' + name,
    })
  }
 
})