import React,{Component} from "react";
import CSSModules from 'react-css-modules';
import styles from './header.css';
import logo from '../image/logo1.png';

class Header extends Component{
    render(){
        return(
            <div styleName="root">
                <div styleName="pharmacy-info">
                    <div styleName="icon">
                        <div styleName="logo-box">
                            <img src={logo} alt="icon" styleName="logo"/>
                        </div>
                    </div>
                    <div styleName="info">
                        <div>
                            <p styleName="name">同仁堂大药房 - 青羊店</p>
                            <p styleName="addr">四川省成都市武侯区玉林路166号</p>
                        </div>
                    </div>
                </div>
                <div>
                    <input type="text" placeholder="搜索店内商品" styleName="input-search"/>
                </div>
            </div>
        )
    }
}
export default CSSModules(Header,styles);