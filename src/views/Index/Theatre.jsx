import React from "react";
import "../../assets/theatre/header.scss"
export default class Theatre extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                <header>
                    <h3 className={"theatre_header"}>剧院</h3>
                </header>
                <div className={"theatre_body"}>
                    <div className={"theatre_body_main"}>
                        <div className={"theatre_content"}>
                            <div className={"theatre_content_list"}>
                                <ul className={"theatre_ul"}>
                                    <li className={"theatre_li"}>
                                        <div className={"theatre_info_show"}>
                                            <div className={"theatre_info"}>
                                                <a href="" className={"theater-pic-name-count"}>
                                                    <div className={"theater-pic-wrap"}>
                                                        <img className={"theater_pic"} src="https://image.juooo.com//group1/M00/01/D2/rAoKmVwknq2AQjJ3AABZC2s-o9o803.jpg" alt="" />
                                                    </div>
                                                    <div className={"theater-name-count-wrap"}>
                                                        <p className={"theater_name"}>南山文体中心</p>
                                                        <p className={"theater_count"}>92场在售演出</p>
                                                    </div>
                                                </a>
                                                <a href="" className={"theater_link"}>
                                                    <img className={"theater_more_btn"} src="https://m.juooo.com/static/img/more.2ce7873.png" alt="" />
                                                </a>
                                            </div>
                                            <div className={"theatre_show"}>
                                                <div className={"theater-show-wrap"}>
                                                    <div className={"swiper_wrapper"}>
                                                        <div className={"swiper_slide"}>
                                                            <div className={"theater-show-date"}>
                                                                <p className={"show_date"}>05月29日</p>
                                                                <span className={"show_dot"}></span>
                                                            </div>
                                                            <a className={"theater-show-pic"} href="">
                                                                <img className={"show_pic"} src="https://image.juooo.com//group1/M00/03/3B/rAoKmV3DeSKACY6QAACUY2-qyys818.jpg" alt=""/>
                                                            </a>
                                                        </div>
                                                        <div className={"swiper_slide"}>
                                                            <div className={"theater-show-date"}>
                                                                <p className={"show_date"}>05月29日</p>
                                                                <span className={"show_dot"}></span>
                                                            </div>
                                                            <a className={"theater-show-pic"} href="">
                                                                <img className={"show_pic"} src="https://image.juooo.com//group1/M00/03/3B/rAoKmV3DeSKACY6QAACUY2-qyys818.jpg" alt=""/>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}