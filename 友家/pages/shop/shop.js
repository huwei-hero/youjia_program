// pages/shop/shop.js
Page({
  data: {
    icon: [
      {
        id: 1,
        name: "生活",
        img: "/images/logo.png",
        text: "生活"
      },
      {
        id: 2,
        name: "学习",
        img: "/images/logo.png",
        text: "学习"
      },
      {
        id: 3,
        name: "体育",
        img: "/images/logo.png",
        text: "体育"
      },
      {
        id: 4,
        name: "食品",
        img: "/images/logo.png",
        text: "食品"
      },
      {
        id: 5,
        name: "卡类",
        img: "/images/logo.png",
        text: "卡类"
      },
      {
        id: 6,
        name: "其他",
        img: "/images/logo.png",
        text: "其他"
      }
    ]
  },

  onLoad: function (options) {

  },
  search:function(res){

  },
  go:function(res){
    var index = res.currentTarget.id;
    wx.navigateTo({
      url: '/pages/shop/shopitem/shopitem?id='+index,
    })
  },

})