import React from 'react';
import { withRouter } from 'react-router-dom'

// antd
import { Button } from 'antd'

// redux
import { connect } from 'react-redux'
import actionCreators from '../../store/actionCreators'

// 接口
import { groupAdminStatistics } from '../../api/user'

// 其他组件
import UserHead from './userHead'

// es6 class写法
class Home extends React.Component {
  constructor(porps) {
    super(porps)
  }
  // 这个生命周期=vue的mounted
  componentDidMount() {
    // console.log(this.props)
    // this.getList()
  }
  // jsx写法 div写在这里
  render() {
    return (
      <div>
        <UserHead></UserHead>
        <Button onClick={this.homeHref.bind(this)}>跳转iframe</Button>
      </div>
    )
  }

  // 获取接口数据
  getList() {
    groupAdminStatistics({}).then(res => {
    });
  }

  homeHref() {
    this.props.history.push(`/main/iframe`)
  }
}

// connect是redux写法 withRouter是loadable懒加载的
export default withRouter(Home)