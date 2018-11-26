import React,{Component} from 'react';
import CSSModules from 'react-css-modules';
import styles from './couponExchange.css';
import ReactDocumentTitle from '../../common/reactDocumentTitle/reactDocumentTitle';
import PointsAvailable from '../../common/pointsAvailable/pointsAvaliable';
import ListItem from '../../common/listItem/listItem';

class CounponExchange extends Component{
    constructor(props){
        super(props);
        this.toConvert=this.toConvert.bind(this);
    }
    toConvert(){
        const {match,history}=this.props;
        history.push(`${match.path}/convert`);
    }
    render(){
        return(
            <ReactDocumentTitle title='代金券兑换'>
                <div styleName="root">
                    <PointsAvailable/>
                    <ul styleName="lists">
                        <ListItem toConvert={this.toConvert}/>
                        <ListItem toConvert={this.toConvert}/>
                    </ul>
                </div>
            </ReactDocumentTitle>
        )
    }
}
export default CSSModules(CounponExchange,styles);