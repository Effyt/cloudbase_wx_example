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



})