import React from 'react';
import { Carousel } from 'antd';
import { withRouter } from 'react-router-dom'

import Logindialog from '../../public/loginDialog'

import './this.scss'

class Gw extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            headerIndex:0,
            isLogin:false
        }
    }
    render() {
        return (
            <div>
                {/* 登录框 */}
                {
                    this.state.isLogin? <Logindialog handleClose={this.closeLoginDialog.bind(this)} toHome={this.toHome.bind(this)}></Logindialog>:null
                }

                {/* 官网 */}
                <div className='gwHeader'>
                    <div className='headerNav'>
                        <div className='title'>悦呗SAAS系统</div>
                        <div className='nav'>
                            <ul>
                                <li onClick={()=>this.handleClickHeader(0)}>
                                    <a href='#banner0' style={this.state.headerIndex==0?{'color':'#2D72E5'}:{}}>首页</a>
                                </li>
                                <li onClick={()=>this.handleClickHeader(1)}>
                                    <a href='#banner1' style={this.state.headerIndex==1?{'color':'#2D72E5'}:{}}>关于我们</a>
                                </li>
                                <li onClick={()=>this.handleClickHeader(2)}>
                                    <a href='#banner2' style={this.state.headerIndex==2?{'color':'#2D72E5'}:{}}>入住</a>
                                </li>
                            </ul>
                        </div>
                        <div className='button'>
                            <div className='login' onClick={this.goLogin.bind(this)}>登录</div>
                            <div className='register'>注册</div>
                        </div>
                    </div>
                </div>

                <div className='banner' id='banner0'>
                    <img src="./image/1.png"></img>
                </div>
                <div className='banner' id='banner1'>
                    <img src="./image/2.png"></img>
                </div>
                <div className='banner' id='banner2'>
                    <img src="./image/3.png"></img>
                </div>

                <div className='footer'>
                    <div>技术支持：悦淘平台、大人平台等</div>
                    <div>入住&合作请联系：saas@yuebei.vip</div>
                </div>
            </div>
        )
    }

    // 生命周期
    componentDidMount() {

    }

    toHome(){
        this.props.history.push(`/main/home`)
    }

    // 登录
    goLogin() {
        this.setState({
            isLogin:true
        })
    }

    // 关闭登录
    closeLoginDialog(){
        this.setState({
            isLogin:false
        })
    }

    // 点击的头部
    handleClickHeader(index){
        this.setState({
            headerIndex:index
        })
    }
}

export default withRouter(Gw)