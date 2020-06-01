import React from 'react'; 
import {withRouter} from 'react-router-dom'
import {Button} from 'antd'
import {connect} from 'react-redux'

class Login extends React.Component{
    constructor(porps){
        super(porps)
    }
    componentDidMount(){
        console.log(this.props)
    }
    render(){
        return (
            <div>
                <Button onClick={this.homeHref.bind(this)}>登录</Button>
            </div>
        )
    }

    homeHref(){
        var UserInfo = {
          name:'大宇哥',
        }
        localStorage.setItem('UserInfo',JSON.stringify(UserInfo))
        this.props.history.push(`/main/home`)
    }
}

const mapStateProps=(state)=>{
    return {
      isEn:state.isEn,
      list:state.list
    }
  }
  
  const mapDispatchProps=(dispatch)=>{
    return {
      handleClickZh(){
        const action={
          type:'Zh_click',
          btnValue:false,
          listValue:[{url:'./image/zh/1.jpg',height:'4.12rem'}]
        }
        dispatch(action)
      },
      handleClickEn(){
        const action={
          type:'En_click',
          btnValue:true,
          listValue:[{url:'./image/zh/1.jpg',height:'4.12rem'}]
        }
        dispatch(action)
      }
    }
  }

export default connect(mapStateProps,mapDispatchProps)(withRouter(Login))