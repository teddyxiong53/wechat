const regeneratorRuntime = require("../../lib/runtime.js")

Page({
  data: {
    goods:[]
  },
  onShow() {
    console.log('before getGoodsList');
    this.getGoodsList();
    console.log('after getGoodsList');
  },
  async getGoodsList() {
    const db = wx.cloud.database();
    console.log("before get goods");
    const result = await db.collection("goods").get();
    console.log("after get goods");
    let data = result.data || [];
    this.setData({
      goods: data
    })
    console.log(this.data.goods);
  }
})