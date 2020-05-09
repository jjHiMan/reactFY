import React, { Fragment } from "react";
import axios from "axios";
import {
    connect
} from "react-redux";
import { upDesigns } from '../../store/actionCreator/designs';
import {
    Link
} from 'react-router-dom';
class StageDesign extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const { list } = this.props;
        return (
            <Fragment>
                <div className={"hot-header"}>
                    <strong>舞台剧</strong>
                    <Link to={"/showList"}>
                        <span>全部 ></span>
                    </Link>
                </div>
                <div className={"hot-show"}>
                    {
                        list.map(v => (
                            <div className={"hot-show-list"} key={v.sche_id}>
                                <Link to={"/showDetails"}>
                                    <img src={v.pic} alt="" />
                                    <h3>{v.schedular_name}</h3>
                                    <span className={"hot-price"}>￥{v.high_price}</span>
                                    <span className={"hot-hei"}> 起</span>
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
function mapStateToProps({ designs }) {
    return {
        list: designs.list
    }
}
function mapDispatchToProps(dispatch) {
    return {
        async listMore(city_id = 0) {
            // https://api.juooo.com/home/index/getFloorShow?city_id=0
            const { data } = await axios.get("/orange/home/index/getFloorShow", {
                params: {
                    city_id
                }
            });

            dispatch(upDesigns(data.data[2]));
            // console.log(data.data[2]);

        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(StageDesign);