import React from "react";
import "../../assets/waterfall/waterfall.scss";
import axios from "axios";
import {
    connect
} from "react-redux";
import {
    Link
} from 'react-router-dom';
import { upWaterFall } from '../../store/actionCreator/home';
class Waterfall extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const { list } = this.props;
        return (
            <div className={"showList-waterfall"}>
                <div className={"showList-waterfall-content"}>
                    {
                        list.map(v => (
                            <Link to={"/showDetails"} key={v.schedular_id}>
                                <div className={"showList-waterfall-list"}>
                                    <img className={"waterfall-list-img"} src={v.pic} alt="" />
                                    <div className={"waterfall-content"}>
                                        <div>
                                            <span><img src={v.method_icon} alt="" />{v.name}</span>
                                        </div>
                                        <p><span style={{ color: "#666666" }}>2020.06.12 - 06.14</span></p>
                                        <p>
                                            <span>￥{v.min_price} </span>
                                            <span> 起</span>
                                        </p>
                                        <p>
                                            <span>电子票</span>
                                            <span>可选座</span>
                                            <span>限时8折起</span>
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </div>
        )
    }
    componentDidMount() {
        this.props.listMore.call(this);
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
        async listMore() {
            // https://api.juooo.com/Show/Search/getShowList?city_id=0&page=1
            const { data } = await axios.get("/orange/Show/Search/getShowList", {
                params: {
                    city_id:this.props.city_id,
                    category:this.props.category
                }
            });

            dispatch(upWaterFall(data.data));
            // console.log(data);

        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Waterfall);