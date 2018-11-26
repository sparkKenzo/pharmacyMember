import React,{Component} from 'react';
import CSSModules from 'react-css-modules';
import styles from './goodsItem.css';
import goodsImg from './image/goods.png';

class GoodsItem extends Component{
    render(){
        return(
            <div styleName="root">
                <img src={goodsImg} alt="商品" styleName="goodsImg"/>
                <div styleName="info">
                    <p>阿莫西林克拉维酸钾干混悬剂(156.25mg*6包/盒)</p>
                    <p>最低金额：100元</p>
                    <p>最低数量：5盒</p>
                </div>
            </div>
        )
    }
}
export default CSSModules(GoodsItem,styles);
