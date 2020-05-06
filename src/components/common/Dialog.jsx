import React,{Fragment} from "react";
import {withRouter} from 'react-router-dom'
import '../../assets/Dialog/dialog.scss';
class Dialog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <Fragment>
                <div className={"dialog"}>
                    <div></div>
                    <div onClick={()=>{
                        this.props.history.push('/');
                    }}><span className={"iconfont icon-yemian"}></span><span>主页</span></div>
                    <div onClick={()=>{
                        this.props.history.push("/myjuooo");
                    }}><span className={"iconfont icon-wode4"}></span><span>我的聚橙</span></div>
                </div>
            </Fragment>
        )
    }
}
export default withRouter(Dialog);