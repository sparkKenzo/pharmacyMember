import React,{Component} from 'react';
import CSSModules from 'react-css-modules';
import styles from './promotion.css';
import ReactDocumentTitle from '../common/reactDocumentTitle/reactDocumentTitle';
import {Link} from 'react-router-dom';

class Promotion extends Component{
    render(){
        const {match}=this.props;
        return(
            <ReactDocumentTitle title='促销信息'>
                <div styleName="root">
                    <p styleName="title">活动推荐</p>
                    <ul styleName="list">
                        <li styleName="list-item">
                            <p styleName="name">会员活动一</p>
                            <p styleName="content">满100赠送相关商品</p>
                            <p styleName="condition">(仅需100积分即可参与本次活动)</p>
                            <Link to={`${match.path}/convert`}>
                                <button styleName="btn">点击参加</button>
                            </Link>
                        </li>
                        <li styleName="list-item">
                            <p styleName="name">会员活动二</p>
                            <p styleName="content">满800赠送相关商品</p>
                            <p styleName="condition">(仅需800积分即可参与本次活动)</p>
                            <Link to={`${match.path}/convert`}>
                                <button styleName="btn">点击参加</button>
                            </Link>
                        </li>
                        <li styleName="list-item">
                            <p styleName="name">会员活动三</p>
                            <p styleName="content">满800赠送相关商品</p>
                            <p styleName="condition">(仅需800积分即可参与本次活动)</p>
                            <Link to={`${match.path}/convert`}>
                                <button styleName="btn">点击参加</button>
                            </Link>
                        </li>
                        <li styleName="list-item">
                            <p styleName="name">会员活动四</p>
                            <p styleName="content">满800赠送相关商品</p>
                            <p styleName="condition">(仅需800积分即可参与本次活动)</p>
                            <Link to={`${match.path}/convert`}>
                                <button styleName="btn">点击参加</button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </ReactDocumentTitle>
        )
    }
}
export default CSSModules(Promotion,styles);