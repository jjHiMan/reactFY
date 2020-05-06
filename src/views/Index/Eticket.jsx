import React, { Fragment } from "react";
import '../../assets/eticket/etucket.scss'
import Dialog from "../../components/common/Dialog";
import {
    Link
} from 'react-router-dom';
export default class Eticket extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <Fragment>
                <div style={{ position: "relative" }} >
                    <div className={"eticket-header"}>
                        票夹
                        <strong onClick={() => {
                            const shade = document.querySelector(".shade");
                            shade.style.display = 'block';
                        }}>. . .</strong>
                    </div>

                    <div className={"eticket-content"}>
                        <img src="https://m.juooo.com/static/img/ticket_empty.cf4b072.png" alt="" />
                        <p>暂无电子票</p>
                        <Link to={'/login'}>
                            <div>登录</div>
                        </Link>
                    </div>
                    <div className={"shade"} onClick={() => {
                        const shade = document.querySelector(".shade");
                        shade.style.display = 'none';
                    }}>
                        <Dialog></Dialog>
                    </div>
                </div>
            </Fragment>
        )
    }
}