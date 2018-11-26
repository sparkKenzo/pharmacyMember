import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './listItem.css';

function ListItem(props) {
    return(
        <li styleName="root">
            <div styleName="left">
                <p>
                    <span styleName="unit">￥</span>
                    <span styleName="num">11</span>
                </p>
                <p styleName="status">永久有效</p>
            </div>
            <div styleName="right">
                <p styleName="name">2000积分兑换11元</p>
                {props.details ? (
                    <div styleName="operate">
                        <span styleName="btn" onClick={props.toConvert}>马上兑</span>
                        <span styleName="link">详情查看</span>
                    </div>
                ) : (
                    <div styleName="operate">
                        <div>
                            <p styleName="text">积分:1000</p>
                            <p styleName="text">剩余:3785</p>
                        </div>
                        <span styleName="btn" onClick={props.toConvert}>马上兑</span>
                    </div>
                )}

            </div>
        </li>
    )
}
export default CSSModules(ListItem,styles);