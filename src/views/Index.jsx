import React from "react";
import {
    Route,
    NavLink
} from 'react-router-dom';
import Home from "./Index/Home";
import Myjuooo from "./Index/Myjuooo";
import Theatre from "./Index/Theatre";
import Eticket from "./Index/Eticket";
import '../assets/Index.css'
export default class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <Route path={'/'} exact component={Home}></Route>
                <Route path={'/theatre'} component={Theatre}></Route>
                <Route path={'/eticket'} component={Eticket}></Route>
                <Route path={'/myjuooo'} component={Myjuooo}></Route>
                <footer className={"foot"}>
                    <NavLink activeClassName={"APP-active"} exact to={'/'}><i className={"iconfont icon-yemian"}></i><span>首页</span></NavLink>
                    <NavLink activeClassName={"APP-active"} to={'/theatre'}><i className={"iconfont icon-juyuan"}></i><span>剧院</span></NavLink>
                    <NavLink activeClassName={"APP-active"} to={'/eticket'}><i className={"iconfont icon-piaojia-copy-copy"}></i><span>票夹</span></NavLink>
                    <NavLink activeClassName={"APP-active"} to={'/myjuooo'}><i className={"iconfont icon-wode4"}></i><span>我的</span></NavLink>
                </footer>
            </div>
        )
    }
}