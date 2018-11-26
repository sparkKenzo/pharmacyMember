import React,{Component} from 'react';
import {Switch,Route} from 'react-router-dom';
import Promotion from './promotion';
import PromotionConvert from './promotionConvert/promotionConvert';

export default class MemberIndex extends Component{
    render(){
        const {match}=this.props;
        const path=match.path;
        return (
            <Switch>
                <Route exact path={`${path}`} component={Promotion}/>
                <Route path={`${path}/convert`} component={PromotionConvert}/>
            </Switch>
        )
    }
}