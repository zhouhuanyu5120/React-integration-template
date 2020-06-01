import React from 'react'; 
import {withRouter} from 'react-router-dom'

class Gw extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div>
                官网

                <div onClick={this.goLogin.bind(this)}>登录</div>
            </div>
        )
    }

    // 生命周期
    componentDidMount(){

    }

    // 登录
    goLogin(){
        this.props.history.push('/login')
    }
}

export default withRouter(Gw)