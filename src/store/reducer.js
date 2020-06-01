import {fromJS} from 'immutable'
import actionType from './actionType'

const defaultState=fromJS({
    msg:'',
    Token:'',
    MenuKey:'', //导航栏的key默认选中效果
})

export default (state=defaultState,action)=>{
    switch(action.type){
        case actionType.LOGIN_SET_TOKEN:
            return state.set('Token',action.value);
            break;
        case actionType.LOGIN_CLEAR_TOKEN:
            return state.set('Token','');
            break;
        // 记录导航栏选中的key
        case actionType.MENU_KEY_CHANGE:
            sessionStorage.setItem('MenuKey',action.value)
            return state.set('MenuKey',action.value)
            break;
    }
    return state
}