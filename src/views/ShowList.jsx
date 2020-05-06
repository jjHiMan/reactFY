import React from "react";
import '../assets/showList/showList.scss'
import Waterfall from "../components/common/Waterfall";
import Dialog from "../components/common/Dialog";
export default class ShowList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dialog:false
        }
    }

    render() {
        return (
            <div className={"showList"} style={{position:"relative"}}>
                <div style={{height:"44px"}}></div>
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
                <div className={"showList-header"}>
                    <span className={"iconfont icon-xiangqian"}></span>
                    <span>演出</span>
                    <span className={"iconfont icon-diandian"} onClick={()=>{
                        this.setState({
                            dialog:true
                        })
                    }}></span>
                </div>
                {
                    this.state.dialog?<div className={"shade"} onClick={()=>{
                        this.setState({
                            dialog:false
                        })
                    }}></div>:""
                }
                {
                    this.state.dialog?<Dialog></Dialog>:""
                }
            </div>
        )
    }
}