import React,{Component} from "react";
import CSSModules from 'react-css-modules';
import styles from './commodity.css';
import Header from "./header/header";
import GoodsList from "./goodsList/goodsList";

class Commodity extends Component{
    render(){
        return(
            <div styleName="root">
                <Header/>
                <div styleName="content">
                    <GoodsList/>
                </div>
            </div>
        )
    }
}
export default CSSModules(Commodity,styles);