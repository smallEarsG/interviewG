// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:'',
    isShow:false,
    slideshow:['../../assets/img/(1).png','../../assets/img/(2).png','../../assets/img/3.png'],
    navIcons:['../../assets/img/icon1.png','../../assets/img/icon2.png','../../assets/img/icon3.png','../../assets/img/icon4.png','../../assets/img/icon5.png'],
    dialogIcon:[['../../assets/img/icon1.png','../../assets/img/icon2.png','../../assets/img/icon3.png','../../assets/img/icon4.png'],['../../assets/img/icon5.png','../../assets/img/icon6.png','../../assets/img/icon7.png','../../assets/img/icon8.png'],['../../assets/img/icon9.png','../../assets/img/icon10.png']],
    ohterIcon:[['../../assets/img/icon1.png','../../assets/img/icon2.png','../../assets/img/icon3.png','../../assets/img/icon4.png'],['../../assets/img/icon1.png','../../assets/img/icon2.png']]
  },
  close(){
   this.setData({
     isShow :false
   })
  },
  show(e){
    this.setData({
      isShow :true,
      title:e.currentTarget.dataset.index
    })
    console.log(e.currentTarget.dataset.index);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})