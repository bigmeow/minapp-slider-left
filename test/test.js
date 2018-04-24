// test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    todoList: [
      {
        id: 'a1',
        text: '你好1'
      },
      {
        id: 'a2',
        text: '你好2'
      },
      {
        id: 'a3',
        text: '你好3'
      },
      {
        id: 'a4',
        text: '你好4'
      },
      {
        id: 'a5',
        text: '你好5'
      },{
        id: 'a6',
        text: '你好6'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // 默认每个选项都是关闭状态
    this.data.todoList.forEach(todoItem => {
      todoItem.isOpen = false
    });
  },

  handleChange: function (isOpen) {
    console.log('显示/关闭了菜单:',isOpen)
  },

  handleDelete: function () {
    console.log('点击删除了')
  },

  handleSliderLeftStart: function (e) {
    console.log('开始左滑', e.target.dataset.id)
    this.data.todoList.forEach(todoItem => {
      // 除了当前项，其它打开项的菜单都关闭，确保每次只有一个项可以左滑显示删除
      if (todoItem.id !== e.target.dataset.id && todoItem.isOpen) {
        todoItem.isOpen = false
      }
    });
    this.setData({
      todoList: this.data.todoList
    })
  }
})