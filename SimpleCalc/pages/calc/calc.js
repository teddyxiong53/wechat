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
  }


})