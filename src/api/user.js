import request from '../encapsulation/request'

// 登录
export function groupAdminStatistics(data) {
    return request({
        url: '/robot/info/groupAdminStatistics',
        method: 'post',
        data
    })
}