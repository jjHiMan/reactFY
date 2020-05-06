import React,{Fragment} from "react";
import '../../assets/Home/homeHeader.scss'
export default class HomeHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <Fragment>
                <div className={"home-header"}>
                    <div className={"home-location"}>
                        <span className={"iconfont icon-location"}></span>
                        <strong></strong>
                    </div>
                    <div className={"home-search"}><strong></strong></div>
                    <div className={"home-calendar"}>
                        <span className={"iconfont icon-rili"}></span>
                    </div>
                </div>
            </Fragment>
        )
    }
}