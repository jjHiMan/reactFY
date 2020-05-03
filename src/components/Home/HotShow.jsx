import React,{Fragment} from "react";
import '../../assets/Home/hotShow.scss';
export default class HotShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <Fragment>
                <div className={"hot-header"}>
                    <strong>热门演出</strong>
                    <span>全部 ></span>
                </div>
                <div className={"hot-show"}>
                    <div>
                        <img src="https://image.juooo.com//group1/M00/04/05/rAoKNV3p9MGAL4-fAABlWN_fCvM587.jpg" alt=""/>
                        <h3>聚橙制作 | 法语音乐剧《摇滚红与黑》-深圳站</h3>
                    </div>
                    <div>
                        <img src="https://image.juooo.com//group1/M00/04/05/rAoKNV3p9MGAL4-fAABlWN_fCvM587.jpg" alt=""/>
                        <h3>聚橙制作 | 法语音乐剧《摇滚红与黑》-深圳站</h3>
                    </div>
                    <div>
                        <img src="https://image.juooo.com//group1/M00/04/05/rAoKNV3p9MGAL4-fAABlWN_fCvM587.jpg" alt=""/>
                        <h3>聚橙制作 | 法语音乐剧《摇滚红与黑》-深圳站</h3>
                    </div>
                    <div>
                        <img src="https://image.juooo.com//group1/M00/04/05/rAoKNV3p9MGAL4-fAABlWN_fCvM587.jpg" alt=""/>
                        <h3>聚橙制作 | 法语音乐剧《摇滚红与黑》-深圳站</h3>
                    </div>
                    <div>
                        <img src="https://image.juooo.com//group1/M00/04/05/rAoKNV3p9MGAL4-fAABlWN_fCvM587.jpg" alt=""/>
                        <h3>聚橙制作 | 法语音乐剧《摇滚红与黑》-深圳站</h3>
                    </div>
                </div>
            </Fragment>
        )
    }
}