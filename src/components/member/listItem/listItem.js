import React,{Component} from "react";
import CSSModules from "react-css-modules";
import styles from "./listItem.css";

class ListItem extends Component{
    render(){
        const {icon,text,noBottomLine}=this.props;
        const style= noBottomLine ? "no-line-info" : "info";
        return(
            <div styleName="root">
                <img src={icon} alt="" styleName="icon"/>
                <div styleName={style}>
                    <span styleName="text">{text}</span>
                    <i styleName="arrow"/>
                </div>
            </div>
        )
    }
}
export default CSSModules(ListItem,styles);
