import React,{Fragment} from "react";
import '../../assets/Home/strilling.scss';
export default class Strolling extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <Fragment>
                <div className={"hot-header"}>
                    <strong>巡回演出</strong>
                    <span>全部 ></span>
                </div>
                <div className={"strilling"}>
                    <img src="https://image.juooo.com//group1/M00/04/05/rAoKNV3p9MGAL4-fAABlWN_fCvM587.jpg" alt=""/>
                    <div>
                        <p>2020.08.13-10.03</p>
                        <p>聚橙制作 | 法语音乐剧《摇滚红与黑》</p>
                        <p><span>￥ 80</span> <span>起</span></p>
                        <p>
                            <span><span>6</span> 城巡演</span>
                            <span>
                                上海 | 北京 | 成都 | 武汉
                            </span>

                        </p>
                    </div>
                </div>
            </Fragment>
        )
    }
}