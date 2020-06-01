import React from 'react';
import Loadable from 'react-loadable';
import Loading from '../../public/loading'

//通用的过场组件
const LoadingComponent = Loadable({
    loader:()=>import('./index.js'),
    loading(){
        return (
            <Loading></Loading>
        )
    }     
})

export default ()=><LoadingComponent/>
