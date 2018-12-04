/**
 * Created by Administrator on 2018/12/4.
 */
//定义所有请求的函数

import ajax from './ajax';

const prefix = '';

//定义发送注册的ajax请求的函数
export const reqRegister = data => ajax(`${prefix}/register`, data, 'POST');