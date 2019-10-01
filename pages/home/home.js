// import { config } from "../../config/config"
import { Theme } from "../../module/theme"
import { Banner } from "../../module/banner"

/* pages/home/home.js*/

Page({
  data: {
    ThemeA: null,
    ThemeB: null,
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
    const themeB = await Banner.getHomeLocationB()
    this.setData({
      themeA: themeA[0],
      themeB
    })
  },
  onPullDownRefresh: function () {

  },


  onReachBottom: function () {

  },


  onShareAppMessage: function () {

  }
})