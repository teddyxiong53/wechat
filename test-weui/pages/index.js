Page({
  data: {
    list: [
      {
        id: 'form',
        name: '表单',
        open: false,
        pages: ['button']
      },
      {
        id: 'widget',
        name: '基础组件',
        open: false,
        pages: ['footer', 'panel']
      }
    ]
  },
  kindToggle: function(e) {
    var id = e.currentTarget.id
    var list = this.data.list
    for(var i=0, len=list.length; i<len; i++) {
      if(list[i].id == id) {
        list[i].open = !list[i].open;

      } else {
        list[i].open = false;
      }
    }
    this.setData({
      list: list
    })
  }
})