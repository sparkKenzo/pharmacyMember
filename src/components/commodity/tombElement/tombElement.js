import React,{Component} from "react";
import CSSModules from "react-css-modules";
import styles from "./tombElement.css";

class TombElement extends Component{
    render(){
        return(
            <li styleName="root">
                <div styleName="icon" />
                <div styleName="info">
                    <p styleName="name"/>
                    <p styleName="describe"/>
                    <p styleName="price"/>
                </div>
            </li>
        )
    }
}
export default CSSModules(TombElement,styles);