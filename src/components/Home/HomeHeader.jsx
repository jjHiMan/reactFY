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
                        <span className={"icon icon-map"}></span>
                        <strong>西安</strong>
                    </div>
                    <div className={"home-search"}><strong></strong></div>
                    <div className={"home-calendar"}>
                        <strong className={"icon icon-map"}>日历</strong>
                    </div>
                </div>
            </Fragment>
        )
    }
}