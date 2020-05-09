import React, { Fragment } from "react";
import '../../assets/Home/homeMiddleItem.scss'
import axios from "axios";
import {
    Link
} from 'react-router-dom';
export default class HomeLabel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            classify_list: []
        }
    }
    // https://api.juooo.com/home/index/getClassifyHome?city_id=1&abbreviation=SZ&version=6.1.1&referer=2
    async getClassifyHome() {
        const { data } = await axios.get('https://api.juooo.com/home/index/getClassifyHome?city_id=1&abbreviation=SZ&version=6.1.1&referer=2')

        this.setState({
            classify_list: data.data.classify_list
        })
    }
    componentDidMount() {
        this.getClassifyHome();
    }
    render() {
        return (
            <Fragment>
                <Link to={"/showList"}>
                    <div className={"middle-item"}>
                        {
                            this.state.classify_list.map(v => (
                                <li key={v.id}>
                                    <span><img src={v.pic} alt="" /></span>
                                    <span>{v.name}</span>
                                </li>
                            ))
                        }
                    </div>
                </Link>
            </Fragment >
        )
    }
}