import React from 'react'; 
import {withRouter} from 'react-router-dom'
import './this.css'
import {Button} from 'antd'

class RedirectAs404 extends React.Component{
    constructor(){
        super()
    }
    render(){
        return (
            <div className='pagefour'>
                <div>404</div>
            </div>
        )
    }
}

export default withRouter(RedirectAs404)