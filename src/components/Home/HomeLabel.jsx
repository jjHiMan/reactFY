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
        // console.log(data)
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
                <div className={"middle-item"}>
                    {
                        this.state.classify_list.map((v, i) => (
                            <Link to={{ pathname: "/showList", query: { city_id: 0, category: (35+i)/1 } }} key={v.id}>
                                <li>
                                    <span><img src={v.pic} alt="" /></span>
                                    <span className={"middle-item-text"}>{v.name}</span>
                                </li>
                            </Link>
                        ))
                    }
                </div>
            </Fragment >
        )
    }
}