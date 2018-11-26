import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './detailItem.css';

function DetailItem(props) {
    return(
        <div>
            <p styleName="title">{props.title}</p>
            <div styleName="details">{props.children}</div>
        </div>
    )
}
export default CSSModules(DetailItem,styles);