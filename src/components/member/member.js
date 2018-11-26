import React,{Component} from "react";
import {NavLink} from 'react-router-dom';
import CSSModules from 'react-css-modules';
import styles from './member.css';
import ReactDocumentTitle from '../common/reactDocumentTitle/reactDocumentTitle';
import MemberInfo from "./memberInfo/memberInfo";
import ListItem from "./listItem/listItem";
import storedValIcon from './images/stored-value-icon.png';
import goodsIcon from './images/goods-icon.png';
import couponIcon from './images/coupon-icon.png';
import GoodsItem from './goodsItem/goodsItem';
import goods1 from './images/goods-01.png';

class Member extends Component{
    render(){
        const {match}=this.props;
        const path=match.path;
        return(
            <ReactDocumentTitle title='个人信息'>
                <div styleName="root">
                    <MemberInfo/>
                    <p styleName="sub-title">积分兑换</p>
                    <div styleName="lists">
                        <NavLink to={`${path}/storedValueExchange`}>
                            <ListItem icon={storedValIcon} text="兑换储值"/>
                        </NavLink>
                        <NavLink to={`${path}/goodsExchange`}>
                            <ListItem icon={goodsIcon} text="兑换商品"/>
                        </NavLink>
                        <NavLink to={`${path}/couponExchange`}>
                            <ListItem icon={couponIcon} text="兑换代金券" noBottomLine/>
                        </NavLink>
                    </div>
                    <p styleName="sub-title-recommend">推荐</p>
                    <div styleName="goods-list">
                        <div styleName="goods-item">
                            <GoodsItem img={goods1} name='康恩贝祛黑素维生素B片' integral='450'/>
                        </div>
                        <div styleName="goods-item">
                            <GoodsItem img={goods1} name='康恩贝祛黑素维生素B片' integral='450'/>
                        </div>
                        <div styleName="goods-item">
                            <GoodsItem img={goods1} name='康恩贝祛黑素维生素B片' integral='450'/>
                        </div>
                        <div styleName="goods-item">
                            <GoodsItem img={goods1} name='康恩贝祛黑素维生素B片' integral='450'/>
                        </div>
                        <div styleName="goods-item">
                            <GoodsItem img={goods1} name='康恩贝祛黑素维生素B片' integral='450'/>
                        </div>
                    </div>
                </div>
            </ReactDocumentTitle>
        )
    }
}
export default CSSModules(Member,styles);