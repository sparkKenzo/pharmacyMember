import React,{Component} from 'react';
import CSSModules from 'react-css-modules';
import styles from './promotionConvert.css';
import ReactDocumentTitle from '../../common/reactDocumentTitle/reactDocumentTitle';
import DetailItem from '../../common/detailItem/detailItem';
import GoodsItem from './goodsItem/goodsItem';
import goods from '../images/goods-replace.png';

class PromotionConvert extends Component{
    render(){
        return(
            <ReactDocumentTitle title='积分兑现'>
                <div styleName="root">
                    <div styleName="top">
                        <div styleName="info">
                            <div styleName="text">
                                <p styleName="name">满100赠送相关商品</p>
                                <p styleName="integral">会员专享需200积分以上</p>
                            </div>
                            <img src={goods} alt="赠品" styleName="img"/>
                        </div>
                        <p styleName="tips">详情请到店咨询</p>
                    </div>
                    <div styleName="bottom">
                        <div styleName="item">
                            <DetailItem title='活动描述'>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio in itaque quibusdam ut voluptate! Consequuntur earum ex excepturi nulla odit officia quia quis recusandae repellendus saepe, sed sint ut voluptatum.</p>
                            </DetailItem>
                        </div>
                        <div styleName="item">
                            <DetailItem title='需包含的商品'>
                                <GoodsItem/>
                                <GoodsItem/>
                            </DetailItem>
                        </div>
                    </div>
                </div>
            </ReactDocumentTitle>
        )
    }
}
export default CSSModules(PromotionConvert,styles);