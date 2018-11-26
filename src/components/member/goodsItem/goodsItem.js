import React,{Component} from 'react';
import CSSModules from 'react-css-modules';
import styles from './goodsItem.css';

class GoodsItem extends Component{
    render(){
        const {img,name,integral}=this.props;
        return(
            <div styleName="root">
                <div styleName="img-box">
                    <img src={img} alt="推荐商品" styleName="img"/>
                </div>
                <p styleName="name">{name}</p>
                <p styleName="integral">{integral}积分</p>
            </div>
        )
    }
}
export default CSSModules(GoodsItem,styles);