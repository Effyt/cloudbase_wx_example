/*
 * @Description: 用户相关接口
 * @Author: Chen Bi Qi
 * @Date: 2020-11-10 16:42:09
 * @LastEditTime: 2020-11-10 17:10:49
 */
import {
    sendRequest
} from './request'



import servicePath from './apiUrl'

/**
 * @description:  获取token
 */
export const getToken = async param => {
    return await sendRequest(servicePath.getToken, param)
}
