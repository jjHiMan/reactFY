import React, { Component } from 'react';
import "../assets/showDetails/content.scss";
import axios from "axios";
import {
    connect
} from "react-redux";
import { upShowDetails } from '../store/actionCreator/showDetails';
class ShowDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const { list } = this.props;
        return (
            <div>
                <div className={"details_box"}>
                    <div className={"details_box_main"}>
                        <div className={"detail__brief"}>
                            <div className={"brief_bg_wrapper"}>
                                <img src="https://image.juooo.com/group1/M00/03/6C/rAoKmV4AZ3GAK-xpAABsQm0qZyQ219.jpg" alt="" />
                            </div>
                            <div className={"brief_wrapper_box"}></div>
                            <div className={"brief_header"}>
                                <div className={"brief_header_text"}>
                                    <span className={"iconfont icon-xiangqian"} onClick={() => {
                                        this.props.history.go(-1);
                                    }}></span>
                                    <span className={"brief_header_texts"}>演出详情</span>
                                </div>
                                <div className={"brief_header_content"}>
                                    <div className={"brief_img_box"}>
                                        <img src="https://image.juooo.com/group1/M00/03/6C/rAoKmV4AZ3GAK-xpAABsQm0qZyQ219.jpg" alt="" />
                                    </div>
                                    <div className={"brief_header_info"}>
                                        <div className={"brief_header_info_top"}>
                                            【演出延期】2020第七届城市戏剧节 乌镇戏剧节“最佳戏剧奖”“最佳个人表现奖”团队最新作品《涂红》-深圳站
                                        </div>
                                        <div className={"brief_header_info_bot"}>
                                            <p>¥99-299</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={"brief_secondary_wrapper"}>
                                <div className={"brief_secondary_support"}>
                                    <div className={"brief_support_one"}>
                                        <div className={"support_one_div"}></div>
                                        <span>可选座</span>
                                    </div>
                                    <div className={"brief_support_one"}>
                                        <div className={"support_one_div"}></div>
                                        <span>电子票</span>
                                    </div>
                                    <div className={"brief_support_one"}>
                                        <div className={"support_one_div"}></div>
                                        <span>退票无忧</span>
                                    </div>
                                </div>
                                <div className={"brief_secondary"}>
                                    <div className={"brief_secondary_info"}>
                                        <div className={"brief_secondary_info_one"}>
                                            <div className={"brief_info_one_text"}>
                                                <span>2020.08.08</span>
                                                <span>周六</span>
                                            </div>
                                        </div>
                                        <div className={"brief_secondary_info_two"}>
                                            <span>
                                                深圳 | 南山文体中心剧院小剧院
                                            </span>
                                        </div>
                                        <div className={"brief_secondary_info_three"}>
                                            <span>
                                                南山区南山大道南头街62号
                                            </span>
                                        </div>
                                    </div>
                                    <div className={"brief_secondary_img"}>
                                        <i className={"iconfont icon-location"}></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={"detail_foot"}>
                            <div className={"detail_foot_img"}>
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAb1BMVEUAAABmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmbw3/OPAAAAJHRSTlMAH4DvLAySB/Tg05n5rk3opHxiwKCKOhUP4qh0M9jNbli4hSkY6Xp9AAABR0lEQVQ4y52R6ZKCMBAGB8IREg4FEVA8drff/xlXsHZLNAhl/yJDJ1/NjHxInNuzBn22eSzztL7iH+W3c15eABRVllX3r9zt1YCqAxkJagXULs8C0UNaGwH21duCforKNWyfvT3o/UtRw1MxPsFVXrjCaTqmEjbiYAPlpGBIPZfopZjHczA+OPNk8HC8QD6zBLhM74VuMZxkxYZEZkgwf303VkFaur0yBWWbsZGCkcDlBYwUt59hAklk4egSj2CjwQiHHWexeOC7RB88ibNh5wYVyntRQoWRlIMsiXIgFYiWxQhWi6ujVzezfjzDwLv3A++Gga9e4Y0mUqBLcfINqKiRO7EXhOJmB9dYltmDkRU0CeQrvJ8TbGSGPgFI+tsS6hTO4ZyYMWKsAfhqZY4KvdtpRtRFZFlUWTnGLkRXnizQdwBdL5/yC+1CKknvBpjdAAAAAElFTkSuQmCC" alt="" />
                                <div>客服</div>
                            </div>
                            <div className={"detail_foot_box"}>
                                <div>选座购买</div>
                            </div>
                        </div>
                        <div className={"detail_center"}>
                            <div className={"center_one"}>
                                <div className={"center_one_top"}>
                                    <div className={"center_top_div"}>
                                        <div className={"center_top_div_one"}>橙PLUS卡</div>
                                        <div className={"center_top_div_two"}>开通送¥200 最高省19.9元</div>
                                        <div className={"center_top_div_three"}>立即开卡</div>
                                    </div>
                                </div>
                                <div className={"center_one_bot"}>
                                    <div className={"center_one_bot_item"}>
                                        <span> VIP+</span>
                                        <span className={"center_item_one"}>:</span>
                                        <span className={"center_item_two"}> V+会员享 </span>
                                        <span className={"center_item_three"}>国内免邮 + 双倍积分</span>
                                    </div>
                                    <div className={"center_one_bot_solid"}></div>
                                    <div className={"center_one_bot_end"}>
                                        <span className={"center_end_one"}>入场:</span>
                                        <span className={"center_end_two"}>1.1以上或5周岁以上儿童，凭票入场，其他儿童谢绝入场</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={"detail_intro"}>
                            <div className={"detail_intro_main"}>
                                <div className={"detail_intro_title"}>演出介绍</div>
                            </div>
                        </div>
                        <div className={"detail_tips"}>
                            <div className={"detail_tips_main"}>
                                <div className={"tips_title"}>
                                    <span>温馨提醒</span>
                                    <span className={"tips_title_span"}>></span>
                                </div>
                                <ul className={"tips_list"}>
                                    <li className={"tips_list_one"}>配送说明</li>
                                    <li>订票说明</li>
                                    <li>确认订单</li>
                                    <li>购票提醒</li>
                                </ul>
                            </div>
                        </div>
                        <div className={"detail_recommend"}>
                            <div className={"detail_recommend_main"}>
                                <div className={"recommend_title"}>相关推荐</div>
                                <div className={"recommend_list"}>
                                    {
                                        list.map(v => (
                                            <div className={"recommend_list_item"} key={v.schedular_id}>
                                                <div className={"recommend_list_main"}>
                                                    <div className={"recommend_list_main_img"}>
                                                        <img src={v.pic} alt="" />
                                                    </div>
                                                    <div className={"recommend_list_main_info"}>
                                                        <p className={"recommend_main_info_one"}>2020.08.22 - 08.23</p>
                                                        <p className={"recommend_main_info_two"}>{v.name}</p>
                                                        <p className={"recommend_main_info_three"}>{v.city_name} | {v.venue_name}</p>
                                                        <div className={"recommend_main_info_for"}>
                                                            <span>电子票</span>
                                                            <span>可选座</span>
                                                            <span>套票</span>
                                                        </div>
                                                        <div className={"recommend_main_info_five"}>
                                                            <span className={"recommend_info_five_span"}>￥{v.min_price}</span>
                                                            <span>起</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount() {
        this.props.listMore.call(this);
    }
}
function mapStateToProps({ showDetails }) {
    return {
        list: showDetails.list
    }
}
function mapDispatchToProps(dispatch) {
    return {
        async listMore(category = 37, city_id = 36) {
            // https://api.juooo.com/Show/Search/getShowList?category=37&city_id=36
            const { data } = await axios.get("/orange/Show/Search/getShowList", {
                params: {
                    category,
                    city_id
                }
            });

            dispatch(upShowDetails(data.data));
            // console.log(data);

        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ShowDetails);