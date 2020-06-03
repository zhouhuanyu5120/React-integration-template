// react
import React from 'react'; 
import {withRouter} from 'react-router-dom'

// antd-ui
import {Button,Avatar,Descriptions} from 'antd'
import { UserOutlined } from '@ant-design/icons';

// redux
import {connect} from 'react-redux'

// 自身css
import './this.css'

class UserHead extends React.Component{
    constructor(porps){
        super(porps)
    }
    // 初始化
    componentDidMount(){
        console.log(this.props)
    }
    render(){
        return (
            <div className='userInfo'>
              <Avatar size={64} icon={<UserOutlined />}></Avatar>
              <Descriptions title="User Info">
                <Descriptions.Item label="UserName">Zhou Maomao</Descriptions.Item>
                <Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
                <Descriptions.Item label="Live">Hangzhou, Zhejiang</Descriptions.Item>
                <Descriptions.Item label="Remark">empty</Descriptions.Item>
                <Descriptions.Item label="Address">
                  No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
                </Descriptions.Item>
              </Descriptions>
            </div>
      )
    }

    homeHref(){
         
    }
}

// redux
const mapStateProps=(state)=>{
    return {
    }
  }
  
  const mapDispatchProps=(dispatch)=>{
    return {
    }
  }

export default connect(mapStateProps,mapDispatchProps)(UserHead)