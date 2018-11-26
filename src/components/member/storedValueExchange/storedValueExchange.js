import React,{Component} from 'react';
import CSSModules from 'react-css-modules';
import styles from './storedValueExchange.css';
import ReactDocumentTitle from '../../common/reactDocumentTitle/reactDocumentTitle';
import PointsAvailable from '../../common/pointsAvailable/pointsAvaliable';
import ListItem from '../../common/listItem/listItem';

class StoredValueExchange extends Component{
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
            <ReactDocumentTitle title='储值兑换'>
                <div styleName="root">
                    <PointsAvailable/>
                    <ul styleName="lists">
                        <ListItem details={true} toConvert={this.toConvert}/>
                        <ListItem details={true} toConvert={this.toConvert}/>
                    </ul>
                </div>
            </ReactDocumentTitle>
        )
    }
}
export default CSSModules(StoredValueExchange,styles);