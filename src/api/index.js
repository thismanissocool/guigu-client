/**
 * Created by Administrator on 2018/12/4.
 */
//定义所有请求的函数

import ajax from './ajax';

const prefix = '';

//定义发送注册的ajax请求的函数
export const reqRegister = data => ajax(`${prefix}/register`, data, 'POST');

//定义发送登录ajax请求函数
export const reqLogin = data => ajax(`${prefix}/login`, data, 'POST');

//定义发送老板请求
export const reqUpdate = data => ajax(`${prefix}/update`, data, 'POST');