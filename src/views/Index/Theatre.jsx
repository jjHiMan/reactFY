import React from "react";
import "../../assets/theatre/header.scss";
import "../../assets/theatre/body.scss";
import axios from "axios";
import {
    Link
} from 'react-router-dom';
import {
    connect
} from "react-redux";
import { upTheatre } from '../../store/actionCreator/theatre';
class Theatre extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const { theatre_list } = this.props;
        return (
            <div>
                <header className={"theatre_header"}>
                    <h3 className={"theatre_header_h3"}>剧 院</h3>
                </header>
                <div className={"theatre_body"}>
                    {
                        theatre_list.map(v => (
                            <div className={"theatre_body_main"} key={v.id}>
                                <div className={"theatre_content"}>
                                    <div className={"theatre_content_list"}>
                                        <ul className={"theatre_ul"}>
                                            <li className={"theatre_li"}>
                                                <div className={"theatre_info_show"}>
                                                    <div className={"theatre_info"}>
                                                        <div className={"theater-pic-name-count"}>
                                                            <div className={"theater-pic-wrap"}>
                                                                <img className={"theater_pic"} src={v.pic} alt="" />
                                                            </div>
                                                            <div className={"theater-name-count-wrap"}>
                                                                <p className={"theater_name"}>{v.name}</p>
                                                                <p className={"theater_count"}>92场在售演出</p>
                                                            </div>
                                                        </div>
                                                        <div className={"theater_link"}>
                                                            <img className={"theater_more_btn"} src="https://m.juooo.com/static/img/more.2ce7873.png" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className={"theatre_show"}>
                                                        <div className={"theater-show-wrap"}>
                                                            <div className={"swiper_wrapper"}>
                                                                {
                                                                    v.showList.map(v => (
                                                                        <div className={"swiper_slide"} key={v.id}>
                                                                            <div className={"theater-show-date"}>
                                                                                <p className={"show_date"}>{v.show_time}</p>
                                                                                <span className={"show_dot"}></span>
                                                                            </div>
                                                                            <div className={"theater-show-pic"}>
                                                                                <img className={"show_pic"} src={v.pic} alt="" />
                                                                            </div>
                                                                        </div>
                                                                    ))
                                                                }
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
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
function mapStateToProps({ theatre }) {
    return {
        theatre_list: theatre.theatre_list
    }
}
function mapDispatchToProps(dispatch) {
    return {
        async listMore(page = 1) {
            // console.log(this.props.pageNo,this.props.pageSize);
            const { data } = await axios.get("/orange/theatre/index/getTheatreList", {
                params: {
                    page
                }
            });

            dispatch(upTheatre(data.data));
            // console.log(data);

        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Theatre);