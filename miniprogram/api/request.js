import {
  getStore,
  showLoading,
  hideLoading,
  showModal,
  getLoginCode,
} from '../common/mUtils'



import {
  getToken
} from './user'

/**
 * @description:   发送网络请求
 * @param {url}    请求api路径 
 * @param {data}   传递参数 
 * @param {method} 请求方法
 * @return: 
 */
export const sendRequest = (url, data, method = 'POST', ) => {

  return new Promise((resolve, reject) => {
    wx.request({
      url: url,
      data: data,
      method: method,
      header: {
        'content-type': 'application/json', // 默认值
        'Authorization': getStore('token') ? `Bearer ${getStore('token')}` : ''
      },
      success: res => {
        hideLoading()
        handleResponse(res, resolve, reject)
      },
      fail: err => {
        hideLoading()
        console.log(err)
        reject(err)

      }
    })
  })

}



const handleResponse = async (res, resolve, reject) => {

  let {
    statusCode
  } = res
  switch (true) {
    case statusCode === 200:
      resolve(res)
      return
    case statusCode === 401:
      showModal(res.data.msg)
      return
    case statusCode === 422:
      showModal('必填参数缺失')
      return
  }

}