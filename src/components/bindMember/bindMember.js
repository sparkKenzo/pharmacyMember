import React,{Component} from 'react';
import CSSModules from 'react-css-modules';
import styles from './bindMember.css';
import ReactDocumentTitle from '../common/reactDocumentTitle/reactDocumentTitle';
import logo from '../../assets/images/logo.png';

class BindMember extends Component{
    constructor(props){
        super(props);
        this.handleBind=this.handleBind.bind(this);
    }
    handleBind(e){
        e.preventDefault();
        const {history}=this.props;
        history.push('member');
    }
    render(){
        return(
            <ReactDocumentTitle title='会员绑定'>
                <div styleName="root">
                    <div styleName="top">
                        <div styleName="logo-box">
                            <img src={logo} alt="logo" styleName="logo"/>
                        </div>
                        <p styleName="name">同善堂大药房</p>
                    </div>
                    <form styleName="form">
                        <div styleName="input-box">
                            <input type="text" styleName="input" defaultValue='summer'/>
                        </div>
                        <div styleName="input-box">
                            <input type="password" styleName="input-pwd" defaultValue='123456'/>
                        </div>
                        <button styleName="submit-btn" onClick={this.handleBind}>立即绑定</button>
                        <span styleName="forget">忘记密码?</span>
                    </form>
                </div>
            </ReactDocumentTitle>
        )
    }
}
export default CSSModules(BindMember,styles);