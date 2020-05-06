import React from "react";
import '../assets/showList/showList.scss'
import Waterfall from "../components/common/Waterfall";
export default class ShowList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className={"showList"}>
                <div className={"showList-header"}>
                    <span className={"iconfont icon-xiangqian"}
                          onClick={()=>{this.props.history.go(-1);}}>
                    </span>
                    <span>演出</span>
                    <span className={"iconfont icon-diandian"}></span>
                </div>
                <div className={"showList-nav"}>
                    <div className={"showList-location"}>
                        <div>
                            <span className={"iconfont icon-location"}></span>
                            <span>全国</span>
                        </div>
                    </div>
                    <div className={"showList-li"}>
                        <li>全部</li>
                        <li>演唱会</li>
                        <li>音乐会</li>
                        <li>话剧歌剧</li>
                        <li>儿童亲子</li>
                        <li>音乐剧</li>
                        <li>戏曲综艺</li>
                        <li>展览</li>
                        <li>舞蹈芭蕾</li>
                    </div>
                </div>
                <Waterfall></Waterfall>
            </div>
        )
    }
}