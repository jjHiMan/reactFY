import React from "react";
import '../../assets/My/my.scss';
import {
    Link
} from 'react-router-dom';
export default class Myjuooo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                <div className={"myjuooo"}>
                    <div className={"my-header"}>
                        <div className={"my-header-login"}>
                            <Link to={'/login'}>
                                <div className={"my-login"}>
                                    <h3>登录/注册</h3>
                                    <p>请点击登录></p>
                                </div>
                            </Link>

                            <div className={"my-vip"}><span>普通会员</span></div>
                            <div className={"my-clip"}>
                                <li>
                                    <span>0</span>
                                    <span>账户余额</span>
                                </li>
                                <div></div>
                                <li>
                                    <span>0</span>
                                    <span>积分</span>
                                </li>
                                <div></div>
                                <li>
                                    <span>0</span>
                                    <span>优惠券</span>
                                </li>
                                <div></div>
                                <li>
                                    <p>立即开通</p>
                                    <p>橙PLUS卡</p>
                                </li>
                            </div>
                        </div>
                        <div className={"my-img"}>
                            <img  src="https://m.juooo.com/static/img/logo-user.8413cbf.png" alt=""/>
                        </div>
                    </div>
                    <div className={"my-content-img"}>
                        <img src="https://m.juooo.com/static/img/ad.411f5e6.png" alt=""/>
                    </div>
                    <div className={"my-order"}>
                        <li>
                            <span className={"iconfont icon-logooo_huabanfuben"}></span>
                            <span>我的订单</span>
                        </li>
                        <li>
                            <span className={"iconfont icon-piaojia-copy-copy"}></span>
                            <span>我的票夹</span>
                        </li>
                        <li>
                            <span className={"iconfont icon-kabao"}></span>
                            <span>我的卡包</span>
                        </li>
                    </div>
                    <div className={"my-order"}>
                        <li>
                            <span className={"iconfont icon-iconfontsvgmoban05\n"}></span>
                            <span>实名购票人</span>
                        </li>
                        <li>
                            <span className={"iconfont icon-kabao"}></span>
                            <span>收货地址</span>
                        </li>
                        <li>
                            <span className={"iconfont icon-yijian"}></span>
                            <span>意见反馈</span>
                        </li>
                        <li>
                            <span className={"iconfont icon-kefu2"}></span>
                            <span style={{color:"#FF6743"}}>客服帮助</span>
                        </li>
                    </div>
                </div>
            </div>
        )
    }
}