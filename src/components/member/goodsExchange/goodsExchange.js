import React,{Component} from 'react';
import CSSModules from 'react-css-modules';
import styles from './goodsExchange.css';
import ReactDocumentTitle from '../../common/reactDocumentTitle/reactDocumentTitle';
import DetailItem from '../../common/detailItem/detailItem';
import img1 from './images/goods1.png';
import img2 from './images/goods2.png';
import Swiper from '../../swiper/swiper';

let CarouselItem=function(props){
    return (
        <img src={props.img} alt="商品" styleName="carousel-img"/>
    )
};
CarouselItem=CSSModules(CarouselItem,styles);
class GoodsExchange extends Component{
    render(){
        const list=[img1,img2,img1].map((item,index)=>(
            <CarouselItem key={index} img={item}/>
        ));
        return(
            <ReactDocumentTitle title='商品兑换'>
                <div styleName="root">
                    <div styleName="carousel">
                        <Swiper list={list}/>
                    </div>
                    <div styleName="info">
                        <p styleName="integral">1200积分</p>
                        <p styleName="goods-name">君乐宝幼儿配方奶粉纯金装900g</p>
                        <p styleName="goods-name">君乐宝幼儿配方奶粉纯金装900g</p>
                    </div>
                    <div styleName="condition">
                        <DetailItem title='适用门店(同善堂大药房)'>
                            <p>大石店，荣华店</p>
                        </DetailItem>
                    </div>
                </div>
            </ReactDocumentTitle>
        )
    }
}
export default CSSModules(GoodsExchange,styles);