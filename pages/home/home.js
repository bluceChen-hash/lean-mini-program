Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: 'ChenChong',
    age:18,
    students:[
      {id:110, name: 'litteboy', age:10},
      {id:111, name: 'bigboy', age: 18}
    ],
    counter:0
  },
  // 封装函数
  handleAddition(){
    this.setData({
      counter: this.data.counter+1
    })
  },
  handleSubtraction(){
    this.setData({
      counter: this.data.counter - 1
    })
  }
 
})