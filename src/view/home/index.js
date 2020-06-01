import React from 'react'; 
import {withRouter} from 'react-router-dom'
import {Button} from 'antd'
import {connect} from 'react-redux'

import { groupAdminStatistics } from '../../api/user'

import actionCreators from '../../store/actionCreators'

class Home extends React.Component{
    constructor(porps){
        super(porps)
    }
    componentDidMount(){
        // console.log(this.props)
        this.getList()
    }
    render(){
        return (
            <div>
                <Button onClick={this.props.homeHref.bind(this)}>跳转about</Button>
            </div>
        )
    }

    // homeHref(){
        // this.props.history.push(`/main/about`)
    // }
    getList(){
      groupAdminStatistics({}).then(res => {
      });
    }
}

const mapStateProps=(state)=>{
    return {
       
    }
  }
  
  const mapDispatchProps=(dispatch)=>{
    return {
      homeHref(){
        this.props.history.push(`/main/about`)
        const action = actionCreators.MenuSetKey('about')
        dispatch(action)
      }
    }
  }

export default connect(mapStateProps,mapDispatchProps)(withRouter(Home))