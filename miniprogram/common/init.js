/*
 * @Description: 
 * @Author: Chen Bi Qi
 * @Date: 2020-11-11 16:10:25
 * @LastEditTime: 2020-11-11 16:38:27
 */




class BaseController {

    constructor() {
        this.tcb = wx.cloud
    }
    /**
     * 调用成功
     */
    success( message = "获取成功", data,code = 1, ) {
        return {
            code,
            data,
            message,
        }
    }

    /**
     * 调用失败
     */
    fail( message = 'api error', data = {},code = 0,) {
        return {
            message,
            code,
            data
        }
    }
}

export{
    BaseController
}