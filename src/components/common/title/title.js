import React,{Component} from 'react';
import CSSModules from 'react-css-modules';
import styles from './title.css';

class Title extends Component{
    render(){
        return (
            <div styleName="root">
                <div styleName="back">返回</div>
                <p styleName="text">{this.props.title}</p>
            </div>
        )
    }
}
export default CSSModules(Title,styles);