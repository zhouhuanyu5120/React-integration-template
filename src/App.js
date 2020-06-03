import React,{Fragment} from 'react';

// redux
import {connect} from 'react-redux'
import actionCreators from './store/actionCreators'

// 路由
import { BrowserRouter , Link } from "react-router-dom";
import RouterPath from './route'

// ui框架
import { Button,Menu,Avatar } from 'antd';
import { MailOutlined, AppstoreOutlined, UserOutlined } from '@ant-design/icons';
import './App.scss';

// 其他组件
import UserHead from './view/userHead'


const { SubMenu } = Menu;


class App extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      // 空标签
      <div id='App'>
        {/* 路由 */}
        <div className='header'>
          <div className='name'>悦呗saas平台</div>

          <div className='logout'>
            <div onClick={this.backHome.bind(this)}><Avatar size={22} icon={<UserOutlined />}></Avatar> 13159602985</div>
            <div onClick={this.logOut.bind(this)}> 退出登录</div>
          </div>
        </div>
        <RouterPath/>
      </div>
    );
  }

  // 声明周期，自动加载
  componentDidMount(){
    // 监听路由，防止不登录直接进入
    this.props.history.listen(route => {
      var UserInfo = JSON.parse(localStorage.getItem('UserInfo'))
      if(route.pathname!='/'){
        if(!UserInfo){
          this.props.history.push(`/`)
        }
      }
    })

    // // 根据缓存里的menuKey加载页面防止标题和页面对不上的问题
    // var MenuKey = sessionStorage.getItem('MenuKey')
    // if(MenuKey!='null'&&MenuKey!=null){
    //   this.props.history.push(`/main/${MenuKey}`)
    //   this.props.handleSetKeyClick({key:MenuKey})
    // }else{
    //   this.props.history.push(`/main/home`)
    //   this.props.handleSetKeyClick({key:'home'})
    // }
  }

  // 返回个人中心
  backHome(){
    this.props.history.push('/main/home')
  }

  // 登出
  logOut(){
    this.props.history.push('/')
  }
    
}

    


// redux中获取参数
const mapStateProps=(state)=>{
  return {
    current:state.get('MenuKey')
  }
}

// redux中调用方法
const mapDispatchProps=(dispatch)=>{
  return {
    handleSetKeyClick(e){
      // 登出的时候不记录key防止再次登录的时候页面404
      if(e.key!='logout'){
        const action = actionCreators.MenuSetKey(e.key)
        dispatch(action)
      }else{
        // 登出时清除用户信息
        localStorage.removeItem('UserInfo')
      }
    }
  }
}

export default connect(mapStateProps,mapDispatchProps)(App);
