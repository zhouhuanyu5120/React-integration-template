import axios from 'axios'
import actionType from './actionType'
import {fromJS} from 'immutable'
import {push} from 'react-router-redux';
// 写入token
const setToken=(value)=>({
    type:actionType.LOGIN_SET_TOKEN,
    value:fromJS(value)
})
// 清除token
const clearToken = (value)=>({
    type:actionType.LOGIN_CLEAR_TOKEN,
    value:fromJS(value)
})
// 登录
const Login=(dispatch)=>{
    // try {
    //     var res=await axios.post('/login')
    //     dispatch(setToken(res.token))
    // } catch (error) {
    //     console.log(error)
    // }
}
// 登出
const LoginOut=(dispatch)=>{
    // try {
    //     var res=await axios.post('/loginOut')
    //     dispatch(push('/login'))
    // } catch (error) {
    //     console.log(error)
    // }
}

// 记录导航栏key
const MenuSetKey = (keyValue) => ({
    type:actionType.MENU_KEY_CHANGE,
    value:fromJS(keyValue)
})

// // 记录导航栏key和把导航栏key存在缓存
// const MenuStorageKey = (value) => {
//     return (dispatch)=>{
//         sessionstorage.setItem('MenuKey',value)
//         dispatch(MenuSetKey(value))
//     }
// }

export default{
    Login,
    LoginOut,
    clearToken,
    MenuSetKey,
    // MenuStorageKey
}