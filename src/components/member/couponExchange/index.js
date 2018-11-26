import React,{Component} from 'react';
import {Switch,Route} from 'react-router-dom';
import CouponExchange from './couponExchange';
import Convert from '../../pointsConvert/pointsConvert';

export default class CouponExchangeIndex extends Component{
    render(){
        const {match}=this.props;
        const path=match.path;
        return(
            <Switch>
                <Route exact path={`${path}`} component={CouponExchange}/>
                <Route path={`${path}/convert`} component={Convert}/>
            </Switch>
        )
    }
}