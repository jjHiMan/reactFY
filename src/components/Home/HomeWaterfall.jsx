import React,{Fragment} from "react";
import '../../assets/Home/homeWaterfall.scss'
export default class HomeWaterfall extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <Fragment>
                <h2 className={"waterfall-header"}>为你推荐</h2>
                <ul className={"waterfall-content"}>
                    <li>

                    </li>
                </ul>
            </Fragment>
        )
    }
}