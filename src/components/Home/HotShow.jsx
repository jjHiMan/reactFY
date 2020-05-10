import React, { Fragment } from "react";
import '../../assets/Home/hotShow.scss';
import {
    Link
} from 'react-router-dom';
import axios from "axios";
import {
    connect
} from "react-redux";
import { upHomeHotShow } from '../../store/actionCreator/home';
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
                    {/* "/showList?city_id=0&category=0" */}
                    <Link to={{pathname:"/showList",query:{city_id:0,category:0}}}>
                        <span>全部 ></span>
                    </Link>
                </div>
                <div className={"hot-show"}>
                    {
                        hots_show_list.map((v, i) => (
                            <div className={"hot-show-list"} key={i}>
                                <Link to={'/showDetails'}>
                                    <img src={v.pic} alt="" />
                                    <h3>{v.show_name}</h3>
                                </Link>
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
function mapStateToProps({ home }) {
    return {
        hots_show_list: home.hots_show_list
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
            // console.log(data);

        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HotShow);