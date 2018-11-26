import React,{Component} from 'react'
import CSSModules from 'react-css-modules';
import styles from './listItem.css';

class ListItem extends Component{
    render(){
        const {logo,name,address,labels,onClick}=this.props;
        return(
            <li styleName="root" onClick={onClick}>
                <div styleName="icon">
                    <div styleName="logo-box">
                        <img src={logo} alt="icon" styleName="logo"/>
                    </div>
                </div>
                <div styleName="info">
                    <div>
                        <p styleName="name">{name}</p>
                        <p styleName="addr">{address}</p>
                        <div styleName="labels">
                            {
                                labels.map((label,index)=>(
                                    <span key={index} styleName="label">{label}</span>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </li>
        )
    }
}
export default CSSModules(ListItem,styles);