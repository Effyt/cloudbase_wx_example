import {
  showToast,
  getLoginCode,
  setStore,
  getStore,
  showModal,
  showLoading
} from '../../common/mUtils'


import {
  private_cloudbase_fun
} from '../../common/private_cloudbase_fun'

import {
  public_cloudbase_fun
} from '../../common/public_cloudbase_fun'


import {
  getToken,
} from '../../api/user'





Page({
  /**
   * 页面的初始数据
   */
  data: {
    background: ['https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3731741439,4057676812&fm=26&gp=0.jpg', 'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3731741439,4057676812&fm=26&gp=0.jpg'],
    shopList: [1, 2, 3]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  async onLoad(options) {

    // await this.refreshToken()
    this.getToken()
  },


  /**
   * @description: 查看token是否过期
   * @param {*}
   * @return {*}
   */
  async refreshToken() {
    let currentTime = new Date().getTime()
    let expires = getStore('expires')
    let token = getStore('token')
    if (!token) {
      this.getToken()
      return
    }
    if (currentTime >= expires) {
      this.getToken()
    }
  },

  /**
   * @description: 获取token
   * @param {*}
   * @return {*}
   */
  async getToken() {
    showLoading('')
    let {
      data
    } = await getToken({
      code: await getLoginCode()
    })

    let {
      code,
      expiresIn,
      msg,
      token,
      ticket,
      session
    } = data
    if (code != 1) {
      showModal(msg)
      return
    }
    this.setData({
      data
    })

    setStore('token', token)
    setStore('tcb_ticket', ticket)
    setStore('expires', expiresIn)
    setStore('session', session)
    return
  },
  changeIndicatorDots() {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },

  changeAutoplay() {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },

  intervalChange(e) {
    this.setData({
      interval: e.detail.value
    })
  },

  durationChange(e) {
    this.setData({
      duration: e.detail.value
    })
  }


})