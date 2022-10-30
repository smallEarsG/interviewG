// custom-tab-bar/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    selected:0,
    color: "#999999",
    selectedColor: "#1990FF",
    position: "bottom",
    borderStyle: "white",
    list: [
      {
        "pagePath": "pages/home/home",
        "text": "工作",
        "iconPath": "../assets/img/icon1.png",
        "selectedIconPath": "../assets/img/icon2.png"
      },
      {
        "pagePath": "pages/index/index",
        "text": "助手",
        "iconPath": "../assets/img/icon3.png",
        "selectedIconPath": "../assets/img/icon4.png"
      },
      {
        "pagePath": "pages/logs/logs",
        "text": "常用",
        "iconPath": "../assets/img/icon5.png",
        "selectedIconPath": "../assets/img/icon6.png"
      },
      {
        "pagePath": "pages/tabBar/page1",
        "text": "分析",
        "iconPath": "../assets/img/icon7.png",
        "selectedIconPath": "../assets/img/icon8.png"
      }
      ,
      {
        "pagePath": "pages/tabBar/page2",
        "text": "我的",
        "iconPath": "../assets/img/icon9.png",
        "selectedIconPath": "../assets/img/icon10.png"
      }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 切换tab
    switchLab:async function(e){
      const {jumppath,index} = e.currentTarget.dataset;
      wx.switchTab({
        url: jumppath,
      })
      this.setData({
        selected:index,
      })
    }
  },
  observers:{

  }
})


