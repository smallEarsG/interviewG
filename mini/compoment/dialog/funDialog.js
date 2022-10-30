// compoment/dialog/funDialog.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title:String,
    dataInfo:Object
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    test(){
        this.triggerEvent("close")
    }
  }
})
