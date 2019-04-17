Page({
  data: {
    idb:"back",
    idc:"clear",
    idt:"toggle",
    idadd:"+",
    id9:"9",
    id8:"8",
    id7:"7",
    idj:"-",
    id6:"6",
    id5: "5",
    id4: "4",
    idx: "x",
    id3: "3",
    id2: "2",
    id1: "1",
    iddiv: "/",
    id0: "0",
    idd: ".",
    ide: "=",
    screenData: "0",
    arr:[],
    logs:[]
  },
  onLoad: function(options) {
    console.log("calc onLoad");
  },
  onReady: function() {
    console.log("calc onReady");
  },
  onShow: function() {
    console.log("calc onShow")
  },
  onHide: function() {
    console.log("calc onHide")
  },
  onUnload: function() {
    console.log("calc onUnload")
  },
  history: function() {
    wx.navigateTo({
      url: '../history/history',
    })
  },
  clickBtn: function(event) {
    var id = event.target.id;
    this.data.logs.push(id);
    wx.setStorageSync("calclogs", this.data.logs);
    if(id == this.data.idb) { //backspace
      var data = this.data.screenData;
      if(data == "0") {
        return;
      }
      data = data.substring(0, data.length-1);
      if(data == "" || data == "-") {
        data = 0;
      }
      this.setData({"screenData": data});
      this.data.arr.pop();
    } else if(id == this.data.idc) {//clean
      this.setData({"screenData": data});
      this.data.arr.length = 0;
    } else if (id == this.data.ide) {//=
      var data = this.data.screenData;
      if(data == "0") {
        return;
      }
      var lastWord = data.charAt(data.length);
      if(isNaN(lastWord)) {
        return;
      }
      var num = "";
    }
  } 

  


})