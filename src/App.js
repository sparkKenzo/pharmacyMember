import React, { Component } from 'react';
import {HashRouter as Router,Switch,Route} from "react-router-dom";
import MemberIndex from "./components/member/index";
import Commodity from "./components/commodity/commodity";
import PharmacyChoose from "./components/pharmacyChoose/pharmacyChoose";
import BindMember from "./components/bindMember/bindMember"
import PointsConvert from './components/pointsConvert/pointsConvert';
import PromotionIndex from './components/promotion/index';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={PharmacyChoose}/>
          <Route path="/commodity" component={Commodity}/>
          <Route path="/bindMember" component={BindMember}/>
          <Route path="/pharmacyChoose" component={PharmacyChoose}/>
          <Route path="/member" component={MemberIndex}/>
          <Route path="/pointsRedemption" component={PointsConvert}/>
          <Route path="/promotion" component={PromotionIndex}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
