import React from "react";
import "../assets/login/login.scss";
import QQ from '../assets/img/qq.png'
import Weibo from "../assets/img/weibo.png"
export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                <div className={"login-header"}><span></span></div>
                <div className={"login-content"}>
                    <img src="https://m.juooo.com/static/img/login_logo.4a43235.png" alt=""/>
                    <div className={"login-telpass"}>
                        <input type="text" placeholder={"请输入手机号/邮箱"}/>
                    </div>
                    <div className={"login-telpass"}>
                        <input type="text" placeholder={"请输入密码"}/>
                        <span></span>
                    </div>
                    <div className={"login-login"}>登录</div>
                    <div className={"login-reg"}>
                        <span>忘记密码</span>
                        <span>验证码登录/注册</span>
                    </div>
                </div>
                <div className={"login-footer"}>
                    <p></p>
                    <span>其他登录方式</span>
                    <p></p>
                </div>
                <div className={"login-icon"}>
                    <img src={QQ} alt=""/>
                    <img src={Weibo} alt=""/>
                </div>
            </div>
        )
    }
}