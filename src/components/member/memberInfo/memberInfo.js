import React,{Component} from "react";
import CSSModules from "react-css-modules";
import avator from "../../../assets/images/u23.png";
import styles from "./memberInfo.css";

class MemberInfo extends Component{
    render(){
        return (
            <div styleName="root">
                <div styleName="black"/>
                <div styleName="white"/>
                <div styleName="info">
                    <div>
                        <img src={avator} alt="" styleName="avator"/>
                        <div styleName="user-info">
                            <div>
                                <span styleName="name">刘思敏</span>
                                <span styleName="score">3762</span>
                            </div>
                            <div>
                                <span styleName="level"/>
                                <span styleName="tips">可用积分</span>
                            </div>
                        </div>
                    </div>
                    <p styleName="card-issuer">同善堂药店(荣华店)</p>
                    <p styleName="cardno">*** *** *** 2737</p>
                </div>
            </div>
        )
    }
}
export default CSSModules(MemberInfo,styles);