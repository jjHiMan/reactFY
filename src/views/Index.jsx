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
                    <NavLink exact to={'/'}><span>首页</span></NavLink>
                    <NavLink to={'/theatre'}><span>剧院</span></NavLink>
                    <NavLink to={'/eticket'}><span>票夹</span></NavLink>
                    <NavLink to={'/myjuooo'}><span>我的</span></NavLink>
                </footer>
            </div>
        )
    }
}