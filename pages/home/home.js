// import { config } from "../../config/config"
import { Theme } from "../../module/theme"
import { Banner } from "../../module/banner"
import { Category } from "../../module/category"

/* pages/home/home.js*/

Page({
  data: {
    themeA: null,
    BannerB: null,
    grid:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  // onLoad: async function () {
  //   const data = await Theme.gethomelocationA()
  //   console.log('home gethomelocationA:',data)
  //   this.setData({
  //     topTheme: data[0]
  //   })
  // },
   async onLoad() {
    this.initAllData()
  },
  async initAllData() {
    const themeA = await Theme.getHomeLocationA()
    const BannerB = await Banner.getHomeLocationB()
    const grid=await Category.getGridCategory()
    this.setData({
      themeA: themeA[0],
      BannerB,
      grid
    })
  },
  onPullDownRefresh: function () {

  },


  onReachBottom: function () {

  },


  onShareAppMessage: function () {

  }
})