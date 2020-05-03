import React,{Fragment} from "react";
import '../../assets/Dialog/dialog.scss';
export default class Dialog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <Fragment>
                <div className={"dialog"}>
                    <div></div>
                    <div><span>标</span><span>主页</span></div>
                    <div><span>标</span><span>我的聚橙</span></div>
                </div>
            </Fragment>
        )
    }
}