import React,{ Fragment } from 'react';
import ReactDOM from 'react-dom';

import { message } from 'antd';
import axios from 'axios'

let service = axios.create({
    baseURL: 'http://localhost:3000/api/',
    timeout: 5000, // request timeout
    headers: {
        'Content-type': 'application/json'
    }
})

// 请求前拦截
service.interceptors.request.use(
    config => {
        return config;
    },
    err => {
        console.log("请求超时");
        return Promise.reject(err);
    }
);


// 设置请求后相应拦截
service.interceptors.response.use(response => {
    return response
}, err => {
    if (err && err.response) {
        switch (err.response.status) {
            case 400:
                err.message = '错误请求'
                break
            case 401:
                err.message = '未授权，请重新登录'
                break
            case 403:
                if (err.response.data.code == '32008002') {
                    setTimeout(() => {
                        window.location.href = `${window.location.href.split('main')[0]}login`
                    }, 300);
                    err.message = '登录超时'
                } else {
                    err.message = '拒绝访问'
                }
                break
            case 404:
                err.message = '请求错误,未找到该资源'
                break
            case 405:
                err.message = '请求方法未允许'
                break
            case 408:
                err.message = '请求超时'
                break
            case 500:
                err.message = '服务器端出错'
                break
            case 501:
                err.message = '网络未实现'
                break
            case 502:
                err.message = '网络错误'
                break
            case 503:
                err.message = '服务不可用'
                break
            case 504:
                err.message = '网络超时'
                break
            case 505:
                err.message = 'http版本不支持该请求'
                break
            default:
                err.message = `连接错误${err.response.status}`
        }
    } else {
        err.message = '连接到服务器失败'
    }

    message.error(err.message)

    return Promise.resolve(err.response)
})

// 设置默认请求头
service.defaults.headers = {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/json;charset=UTF-8'
}

export default service