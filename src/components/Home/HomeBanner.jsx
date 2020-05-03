import React,{Fragment} from "react";
import '../../assets/Home/homeBanner.css';
export default class HomeBanner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <Fragment>
                <div className={"background"}>
                    <div></div>
                </div>
            </Fragment>
        )
    }
}