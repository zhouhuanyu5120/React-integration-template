import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'

export const HeaderWrapper = createGlobalStyle`
    
`

// 登录按钮
export const LoginButton=styled.div`
    width:463px;
    height:64px;
    background:rgba(45,114,229,1);
    border-radius:32px;
    text-align: center;
    line-height: 64px;
    color: #fff;
    font-size:21px;
    font-family:Microsoft YaHei;
    font-weight:400;
    margin: 0 auto;
    margin-top: 50px;
    cursor: pointer;
`

// 账户输入框
export const AdminInput=styled.input.attrs({
    placeholder:'账号',
    type:'text'
})`
    width: 430px;
    height: 100%;
    padding-left: 10px;
    box-sizing: border-box;
    outline: none;
    border: none;
    background-color: transparent;
    font-size:23px;
    font-family:Source Han Sans CN;
    font-weight:400;
`