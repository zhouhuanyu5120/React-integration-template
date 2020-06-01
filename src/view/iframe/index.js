import React from 'react'; 
import {withRouter} from 'react-router-dom'
import './this.css'

class IframeView extends React.Component{
    constructor(){
        super()
    }
    render(){
        return (
            <div>
                <iframe id='iframe' src='http://10.168.1.241:8080/saasAdmin/'></iframe>
            </div>
        )
    }
}

export default withRouter(IframeView)