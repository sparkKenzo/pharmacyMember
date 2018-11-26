import React,{Component} from 'react';
import CSSModules from 'react-css-modules';
import styles from './pointsConvert.css';
import ReactDocumentTitle from '../common/reactDocumentTitle/reactDocumentTitle';
import icon from './images/Icon.png';
import DetailItem from '../common/detailItem/detailItem';

class PointsConvert extends Component{
    constructor(props){
        super(props);
        this.state={
            num:1,
            cardinalNum:1000
        };
        this.handleMinus=this.handleMinus.bind(this);
        this.handlePlus=this.handlePlus.bind(this);
    }
    handleMinus(){
        this.setState((prevState)=>({
            num:--prevState.num
        }))
    }
    handlePlus(){
        this.setState((prevState)=>({
            num:++prevState.num
        }))
    }
    render(){
        const {num,cardinalNum}=this.state;
        return(
            <ReactDocumentTitle title='积分兑换'>
                <div styleName="root">
                    <div styleName="top-area">
                        <div styleName="title">
                            <div>
                                <p styleName="name">满1000积分兑换5元</p>
                                <p styleName="tips">会员专享</p>
                            </div>
                            <img src={icon} alt="" styleName="icon"/>
                        </div>
                        <div styleName="divider"/>
                        <div styleName="operator">
                            <div styleName="counter">
                                <span styleName="minus" onClick={this.handleMinus}>-</span>
                                <span styleName="count">{num}</span>
                                <span styleName="plus" onClick={this.handlePlus}>+</span>
                            </div>
                            <span styleName="btn">{num * cardinalNum}积分兑换</span>
                        </div>
                    </div>
                    <div styleName="bottom-area">
                        <DetailItem title='适用门店'>
                            <p>武青店、东顺店、甘露堂、大石店、武侯店、高升桥、益生堂、蜀营店、妙手堂、建和店、槐树店、桂溪店、佳灵店、二环路西二段店、中和店、荣华店、中药房、四川同善堂药业连锁有限公司库房、测试机构、康正药房万春路、德阳雨晴大药房有限公司</p>
                        </DetailItem>
                    </div>
                </div>
            </ReactDocumentTitle>
        )
    }
}
export default CSSModules(PointsConvert,styles);