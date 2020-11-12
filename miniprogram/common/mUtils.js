/**
 * 页面跳转 navigateTo 保留当前页面，跳转到应用内的某个页面
 */
export const navigateTo = (url, option) => {
  if (!url) return
  let _option = option || {}
  _option.url = url
  wx.navigateTo(_option)
}
/**
 * 页面跳转 redirectTo 关闭当前页面，跳转到应用内的某个页面
 */
export const redirectTo = (url, option) => {
  if (!url) return
  let _option = option || {}
  _option.url = url
  wx.redirectTo(_option)
}
/**
 * 页面跳转 reLaunch 关闭所有页面，打开到应用内的某个页面。
 */
export const reLaunch = (url, option) => {
  if (!url) return
  let _option = option || {}
  _option.url = url
  wx.reLaunch(_option)
}
/**
 * 页面跳转 switchTab 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面
 */
export const switchTab = (url, option) => {
  if (!url) return
  let _option = option || {}
  _option.url = url
  wx.switchTab(_option)
}

/**
 * 显示消息提示框
 */
export const showToast = (title, icon = 'none', duration = 1000) => {
  wx.showToast({
    title: title,
    icon: icon,
    duration: duration
  })
}


export const showModal = (title) => {
  wx.showModal({
    content: title,
    showCancel: false
  })

}



/**
 * 显示 loading 提示框
 */
export const showLoading = (title = '加载中') => {
  wx.showLoading({
    title: title,
    mask: true
  })
}

/**
 * 隐藏 loading 提示框
 */
export const hideLoading = () => {
  wx.hideLoading()
}

/**
 * 存储localStorage
 */
export const setStore = (name, content) => {
  if (!name) return
  // if (typeof content !== 'string') {
  //   content = JSON.stringify(content)
  // }
  wx.setStorageSync(name, content)
}

/**
 * 获取localStorage
 */
export const getStore = name => {
  if (!name) return
  return wx.getStorageSync(name)
}

/**
 * 删除localStorage
 */
export const removeStore = name => {
  if (!name) return
  wx.removeStorageSync(name)
}

/**
 * formatDate
 */
export const formatDate = (dataStr) => {
  if (!dataStr) return ''
  let timeStr = new Date(dataStr.replace(/-/g, '/')).getTime()
  let datestr = `${new Date().getFullYear()}/${new Date().getMonth() + 1}/${new Date().getDate()}`

  let diffValue = (timeStr - new Date(datestr).getTime()) / (1000 * 24 * 60 * 60)
  return diffValue < 0 ? Math.abs(diffValue) : diffValue
}



/**
 * @description: 获取用户code
 * @param {*}
 * @return {*}
 */
export const getLoginCode = () => {
  return new Promise((resolve, reject) => {
    wx.login({
      success: res => {
        resolve(res.code)
      },
      fail: err => {
        reject(error)
      }
    })
  })
}