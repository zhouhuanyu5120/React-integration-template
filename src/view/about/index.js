import React from 'react'; 
import {withRouter} from 'react-router-dom'

class About extends React.Component{
    constructor(){
        super()
    }
    render(){
        return (
            <div>About</div>
        )
    }
}

export default withRouter(About)