import React,{Component} from 'react';
import {Switch,Route} from 'react-router-dom';
import Member from './member';
import StoredValueExchangeIndex from './storedValueExchange/index';
import GoodsExchange from './goodsExchange/goodsExchange';
import CouponExchangeIndex from './couponExchange/index';

export default class MemberIndex extends Component{
    render(){
        const {match}=this.props;
        const path=match.path;
        return (
            <Switch>
                <Route exact path={`${path}`} component={Member}/>
                <Route path={`${path}/storedValueExchange`} component={StoredValueExchangeIndex}/>
                <Route path={`${path}/goodsExchange`} component={GoodsExchange}/>
                <Route path={`${path}/couponExchange`} component={CouponExchangeIndex}/>
            </Switch>
        )
    }
}