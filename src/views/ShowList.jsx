import React from "react";
import '../assets/showList/showList.scss'
import Waterfall from "../components/common/Waterfall";
import Dialog from "../components/common/Dialog";
import axios from "axios";
import {
    connect
} from "react-redux";
import { upWaterFall } from '../store/actionCreator/home';
class ShowList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dialog: false
        }
    }
    render() {
        return (
            <div className={"showList"} style={{ position: "relative" }}>
                <div style={{ height: "44px" }}></div>
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
                    <span className={"iconfont icon-xiangqian"} onClick={() => {
                        this.props.history.go(-1);
                    }}></span>
                    <span>演出</span>
                    <span className={"iconfont icon-diandian"} onClick={() => {
                        this.setState({
                            dialog: true
                        })
                    }}></span>
                </div>
                {
                    this.state.dialog ? <div className={"shade"} onClick={() => {
                        this.setState({
                            dialog: false
                        })
                    }}></div> : ""
                }
                {
                    this.state.dialog ? <Dialog></Dialog> : ""
                }
            </div>
        )
    }
    componentDidMount() {
        const queryS={city_id:0,category:0};
        let query=(this.props.location.query?this.props.location.query:queryS);
        this.props.listMore.call(this,query);
        // console.log(this.props.location.query);
    }
}
function mapStateToProps({ home }) {
    return {
        list: home.list,
        city_id: home.city_id,
        category: home.category
    }
}
function mapDispatchToProps(dispatch) {
    return {
        async listMore({city_id=0,category=0}) {
            // https://api.juooo.com/Show/Search/getShowList?city_id=0&page=1
            const { data } = await axios.get("/orange/Show/Search/getShowList", {
                params: {
                    city_id,
                    category
                }
            });

            dispatch(upWaterFall(data.data));
            // console.log(data);

        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ShowList);