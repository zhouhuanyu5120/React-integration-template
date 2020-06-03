import React from 'react'; 
import {withRouter} from 'react-router-dom'

// antd
import { Button,Menu,Modal } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';

import './this.scss'

class IframeView extends React.Component{
    constructor(props){
        super(props)
        this.state={
            visible:false,
            current:'',
            modalTitle:''
        }
    }
    render(){
        return (
            <div>
                <Menu onClick={this.showModal.bind(this)} selectedKeys={[this.state.current]} mode="horizontal" theme="dark">
                    <Menu.Item key="选项卡管理" icon={<MailOutlined />} selectable={false}>
                        选项卡管理
                    </Menu.Item>

                    <Menu.Item  key="精钢位管理" icon={<MailOutlined />} selectable={false}>
                        精钢位管理
                    </Menu.Item>

                    <Menu.Item  key="胶囊广告管理" icon={<MailOutlined />} selectable={false}>
                        胶囊广告管理
                    </Menu.Item>

                    <Menu.Item  key="推荐商品管理" icon={<MailOutlined />} selectable={false}>
                        推荐商品管理
                    </Menu.Item>
                </Menu>

                <Modal
                    title={this.state.modalTitle}
                    width='90%'
                    centered={true}
                    visible={this.state.visible}
                    onOk={this.handleOk.bind(this)}
                    onCancel={this.handleCancel.bind(this)}
                    footer={null}
                >
                   <div className='modalBox'></div>
                </Modal>
                <iframe id='iframe' src='http://localhost:8080/saasAdmin/'></iframe>
            </div>
        )
    }

    // 打开dialog
    showModal(e){
        console.log(e)
        this.setState({
            visible: true,
            modalTitle:e.key
        });
    }

    // dialog点击确定
    handleOk(){
        this.setState({
            visible: false,
        });
    }

    // dialog点击取消
    handleCancel(){
        this.setState({
            visible: false,
        });
    }
}

export default withRouter(IframeView)