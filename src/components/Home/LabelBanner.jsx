import React,{Fragment} from "react";
import Vip from '../../assets/img/3.png';
import BannerImg from '../../assets/img/4.jpg'
import '../../assets/Home/labelBanner.scss';
export default class LabelBanner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <Fragment>
                <div className={"bannerTwo"}>
                    <div className={"banner-header"}>
                        <img src={Vip} alt=""/>
                        <span style={{marginRight:"190px"}}>会员专享折扣</span>
                        <span>99元/年 ></span>
                    </div>
                    <div className={"banner-bannerTwo"}>
                        <img src={BannerImg} alt=""/>
                        <div className={"content"}>
                            <span className={"content-span"}>【万有音乐系】《最后的莫西干人——亚历桑德罗印第安音乐品鉴会》-深圳站</span>
                            <div className={"content-div"}>
                                <span><strong style={{color:"red",fontSize:"20px"}}>7</strong> 折起</span>

                                <div>
                                    立即抢购
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"banner-li"}>

                </div>
            </Fragment>
        )
    }
}