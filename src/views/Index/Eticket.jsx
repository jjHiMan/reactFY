import React,{Fragment} from "react";
import '../../assets/eticket/etucket.scss'
import Dialog from "../../components/common/Dialog";
export default class Eticket extends React.Component {
    constructor(props) {
        super(props);
        this.dialog = false;
        this.state = {
            dialog : false
        }
    }

    render() {
        return (
            <Fragment>
                <div style={{position:"relative"}} >
                    <div className={"eticket-header"}>
                        票夹
                        <strong onClick={()=>{
                            this.setState({
                                dialog:true
                            })
                        }}>. . .</strong>
                    </div>

                    <div className={"eticket-content"}>
                        <img src="https://m.juooo.com/static/img/ticket_empty.cf4b072.png" alt=""/>
                        <p>暂无电子票</p>
                        <div onClick={()=>{
                            this.props.history.push('/login');
                        }}>登录</div>
                    </div>

                    {
                        this.state.dialog?<div className={"shade"} onClick={()=>{
                            this.setState({
                                dialog:false
                            })
                        }}></div>:""
                    }
                    {
                        this.state.dialog?<Dialog></Dialog>:""
                    }


                </div>
            </Fragment>
        )
    }
}