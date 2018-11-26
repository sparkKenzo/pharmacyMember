import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './pointsAvaliable.css';

function PointsAvailable(props) {
    return(
        <div styleName="root">
            <span styleName="tips">可用积分:</span>
            <span styleName="num">3165</span>
        </div>
    )
}
export default CSSModules(PointsAvailable,styles);