import React,{Component} from "react";
import CSSModules from "react-css-modules";
import styles from "./goodsItem.css";
import placeholderImg from '../../../assets/images/placeholder.png';
import goodsImg from '../image/goods.png';

class GoodsItem extends Component{
    render(){
        const {name}=this.props;
        return(
            <li styleName="root">
                <img src={placeholderImg} data-src={goodsImg} alt="药品图片" styleName="icon" />
                <div styleName="info">
                    <p styleName="name">{`${name}`}</p>
                    <p styleName="describe">帮助补充人体的所需钙铁锌硒维生素</p>
                    <p styleName="price"><span styleName="unit">￥</span>88</p>
                </div>
            </li>
        )
    }
}
export default CSSModules(GoodsItem,styles);