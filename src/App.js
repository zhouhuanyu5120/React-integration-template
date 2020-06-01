import React,{Fragment} from 'react';

// redux
import {connect} from 'react-redux'
import actionCreators from './store/actionCreators'

// 路由
import { BrowserRouter , Link } from "react-router-dom";
import RouterPath from './route'

// ui框架
import { Button,Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import './App.css';
const { SubMenu } = Menu;

class App extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      // 空标签
      <div id='App'>
        {/* 导航栏 */}

        <div className='menuBox'>
          <Menu onClick={this.props.handleSetKeyClick} selectedKeys={[this.props.current]} mode="horizontal" theme="dark">
            <Menu.Item key="home" icon={<MailOutlined />}>
              <Link  to={`/main/home`}>
                home
              </Link>
            </Menu.Item>

            <Menu.Item key="about" icon={<MailOutlined />}>
              <Link to={`/main/about`}>
                about
              </Link>
            </Menu.Item>

            <Menu.Item key="iframe" icon={<MailOutlined />}>
              <Link to={`/main/iframe`}>
                iframe
              </Link>
            </Menu.Item>

            <Menu.Item key="mail3" icon={<MailOutlined />}>
              Navigation One
            </Menu.Item>

            <Menu.Item key="mail4" icon={<MailOutlined />}>
              Navigation One
            </Menu.Item>

            <Menu.Item key="mail5" icon={<MailOutlined />}>
              Navigation One
            </Menu.Item>

            <Menu.Item key="logout" icon={<AppstoreOutlined />}>
              <Link to={`/login`}>
                Log Out
              </Link>
            </Menu.Item>

            <SubMenu icon={<SettingOutlined />} title="Navigation Three - Submenu">
              <Menu.ItemGroup title="Item 1">
                <Menu.Item key="setting:1">Option 1</Menu.Item>
                <Menu.Item key="setting:2">Option 2</Menu.Item>
              </Menu.ItemGroup>
              <Menu.ItemGroup title="Item 2">
                <Menu.Item key="setting:3">Option 3</Menu.Item>
                <Menu.Item key="setting:4">Option 4</Menu.Item>
              </Menu.ItemGroup>
            </SubMenu>

            <Menu.Item key="alipay">
              <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                Navigation Four - Link
              </a>
            </Menu.Item>
          </Menu>
          </div>

        {/* 路由 */}
        <RouterPath/>
      </div>
    );
  }

  // 声明周期，自动加载
  componentDidMount(){
    // 监听路由，防止不登录直接进入
    this.props.history.listen(route => {
      var UserInfo = JSON.parse(localStorage.getItem('UserInfo'))
      if(route.pathname!='/login'){
        if(!UserInfo){
          this.props.history.push(`/login`)
        }
      }
    })

    // 根据缓存里的menuKey加载页面防止标题和页面对不上的问题
    var MenuKey = sessionStorage.getItem('MenuKey')
    if(MenuKey!='null'&&MenuKey!=null){
      this.props.history.push(`/main/${MenuKey}`)
      this.props.handleSetKeyClick({key:MenuKey})
    }else{
      this.props.history.push(`/main/home`)
      this.props.handleSetKeyClick({key:'home'})
    }
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
