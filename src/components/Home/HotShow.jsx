import React, { Fragment } from "react";
import '../../assets/Home/hotShow.scss';
import axios from "axios";
import {
    connect
} from "react-redux";
import { upHomeHotShow } from '../../store/actionCreator/homeHotShow';
class HotShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const { hots_show_list } = this.props;
        return (
            <Fragment>
                <div className={"hot-header"}>
                    <strong>热门演出</strong>
                    <span>全部 ></span>
                </div>
                <div className={"hot-show"}>
                    {
                        hots_show_list.map((v,i) => (
                            <div className={"hot-show-list"} key={i}>
                                <a href="http://localhost:3000/showDetails">
                                    <img src={v.pic} alt="" />
                                    <h3>{v.show_name}</h3>
                                </a>
                            </div>
                        ))
                    }
                </div>
            </Fragment>
        )
    }
    componentDidMount() {
        this.props.listMore.call(this);
    }
}
function mapStateToProps({ homeHotShow }) {
    return {
        hots_show_list: homeHotShow.hots_show_list
    }
}
function mapDispatchToProps(dispatch) {
    return {
        async listMore(city_id = 0) {
            // console.log(this.props.pageNo,this.props.pageSize);
            // home/index/getHotsRecommendList?city_id=0
            const { data } = await axios.get("/orange/home/index/getHotsRecommendList", {
                params: {
                    city_id
                }
            });

            dispatch(upHomeHotShow(data.data));
            console.log(data);

        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HotShow);