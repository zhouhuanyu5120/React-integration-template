import React from 'react'; 
import './this.css'

class Loading extends React.Component{
    constructor(){
        super()
    }
    render(){
        return (
            <div className='loading'>
                <div>正在加载。。</div>
            </div>
        )
    }
}

export default Loading