import React from 'react'; 
import './this.scss'
import { UserOutlined,UnlockOutlined,CloseOutlined} from '@ant-design/icons';

// 也可以这样写css
import {LoginButton,AdminInput} from './style'

import { Checkbox } from 'antd';

class Logindialog extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div className='Logindialog'>
                <div className='dialog'>

                    {/* 关闭按钮 */}
                    <div className='close' onClick={this.props.handleClose}>
                        {/* <UserOutlined /> */}
                        <CloseOutlined />
                    </div>

                    {/* 标题 */}
                    <div className='title'>
                        悦呗SAAS系统
                    </div>

                    {/* 密码输入框 */}
                    <div className='info'>
                        <div className='infoList'>
                            <div className='iconBox'>
                                <UserOutlined/>
                            </div>
                            {/* 两种css的方式 */}
                            <AdminInput></AdminInput>
                            {/* <input type='text' placeholder='账号'></input> */}
                        </div>
                        <div className='infoList'>
                            <div className='iconBox'>
                                <UnlockOutlined/>
                            </div>
                            <input type='password' placeholder='密码'></input>
                        </div>
                    </div>

                    {/* 选择和注册部分 */}
                    <div className='register'>
                        <Checkbox onChange={this.loginCheck.bind(this)}>3天内自动登陆</Checkbox>
                        <div>立即注册</div>
                    </div>

                    {/* 提交按钮 */}
                    {/* 两种css的方式 */}
                    <LoginButton onClick={this.goLogin.bind(this)}>登录</LoginButton>
                    {/* <div className='loginButton'>登录</div> */}

                    {/* 找回密码 */}
                    <div className='findPSW'>
                        还没有账号？<span>找回密码</span>
                    </div>
                </div>
            </div>
        )
    }

    loginCheck(e){

    }

    goLogin(){
        this.props.toHome()
    }
}

export default Logindialog