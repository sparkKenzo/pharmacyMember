import React,{Component} from "react";
import CSSModules from "react-css-modules";
import styles from "./goodsList.css";
import GoodsItem from "../goodsItem/goodsItem";
import TombElement from '../tombElement/tombElement';
import axios from 'axios';
import LazyLoad from 'vanilla-lazyload';

class GoodsList extends Component{
    constructor(props){
        super(props);
        this.goodsListRef=React.createRef();
        this.timer=null;//定时器id
        this.prevScrollTop=0;//记录滚动的高度
        this.loadIndex=0;//加载分类数据的索引
        this.clickFlag=false;//是否点击
        this.loadFlag=true;//是否分页加载数据
        this.state={
            cateIndex:0,//左侧分类索引
            curIndex:0,//当前激活的列表索引
            navFlag:false,//是否在列表底部显示title
            goodsList:[],//商品列表
            fixedStyle:{}//固定头部样式
        };
        /*绑定this*/
        this.handleScroll=this.handleScroll.bind(this);
    }
    componentDidMount(){
        axios.get(`/api/ypxx/cate`)
        .then(async res=>{
            const result=res.data;
            let goodsList;
            if(result.length>0){
                goodsList=result.map(item=>{
                    item.goods=[];
                    return item;
                });
                /*首先查询第一个分类的商品*/
                const goods=await axios.get(`/api/ypxx/goods`,{
                    params:{
                        cate:result[0].cate,
                        start:0
                    }
                });
                goodsList[0].goods=goods.data;
            }
            this.setState({goodsList});
        });
        /*初始化图片懒加载*/
        this.lazyLoad=new LazyLoad({
            container:this.goodsListRef.current
        });
        /*滚动切换导航*/
        this.containerHeight=this.goodsListRef.current.getBoundingClientRect().height;
        this.bufferHeight=this.goodsListRef.current.querySelector('.fixedTitle').getBoundingClientRect().height;
        this.goodsListRef.current.addEventListener("scroll",this.handleScroll);
        /*设置固定头部的位置*/
        const rect = this.goodsListRef.current.getBoundingClientRect();
        this.setState({fixedStyle:{
            top: rect.top,
            left: rect.left,
            width:rect.width
        }});
    }
    componentDidUpdate(){
        const cateNodeArr = this.goodsListRef.current.querySelectorAll('.goods-cate-item');
        const heightArr=[];
        let s=0;
        cateNodeArr.forEach(item=>{
            heightArr.push(s);
            s+=item.getBoundingClientRect().height;
        });
        this.scrollArr=heightArr;
        //加载下一分类的数据(如果下一分类的数据为空)
        this.loadData();
        /*更新懒加载数据*/
        this.lazyLoad.update();
    }
    componentWillUnmount(){
        this.goodsListRef.current.removeEventListener("scroll",this.handleScroll);
    }
    queryGoods(index,start=0){
        return new Promise((resolve)=>{
            if(this.state.goodsList[index].goods.length >= this.state.goodsList[index].count) {
                resolve();
                return;
            }
            this.loadFlag=false;
            axios.get(`/api/ypxx/goods`,{
                params:{
                    cate:this.state.goodsList[index].cate,
                    start
                }
            }).then(res=>{
                this.setState((prevState)=>{
                    const modify=prevState.goodsList.map((item,i)=>{
                        if(i===index){
                            item.goods=[...item.goods,...res.data];
                        }
                        return item;
                    });
                    return {goodsList:modify}
                },()=>{
                    this.loadFlag=true;
                    resolve();
                });
            })
        })
    }
    loadData(){
        const scrollTop=this.goodsListRef.current.scrollTop;
        const len=this.state.goodsList.length;
        if (this.scrollArr[this.loadIndex] - scrollTop < this.containerHeight) {
            this.loadIndex<len-1 && this.queryGoods(++this.loadIndex,this.state.goodsList[this.loadIndex].goods.length);
        }
    }
    isScrollEnd(){
        const sTop=this.goodsListRef.current.scrollTop;
        if(sTop === this.prevScrollTop){
            //滚动结束
            this.handleScrollFunc();
        }
    }
    handleScroll(){
        clearTimeout(this.timer);
        this.timer=setTimeout(this.isScrollEnd.bind(this),50);
        this.prevScrollTop=this.goodsListRef.current.scrollTop;
    }
    handleScrollFunc(){
        const scrollTop=this.goodsListRef.current.scrollTop;
        const len=this.scrollArr.length;
        for(let i=0;i<len;i++){
            if(scrollTop>=this.scrollArr[i]){
                !this.clickFlag && this.setState({cateIndex:i});
                this.setState({
                    curIndex:i
                });
                if(i<len-1 && scrollTop<this.scrollArr[i+1]){
                    if(scrollTop>=this.scrollArr[i+1]-this.bufferHeight){
                        this.setState((prevState)=>{
                            return {navFlag:true,fixedStyle:{...prevState.fixedStyle,opacity:0}}
                        })
                    }else{
                        this.setState((prevState)=>{
                            return {navFlag:false,fixedStyle:{...prevState.fixedStyle,opacity:1}}
                        })
                    }
                }else{
                    this.setState(prevState=>{
                        return {
                            navFlag:false,
                            fixedStyle:{...prevState.fixedStyle,opacity:1}
                        }
                    })
                }
                if(i<len-1 && scrollTop<this.scrollArr[i+1]){
                    this.loadFlag && this.queryGoods(i, this.state.goodsList[i].goods.length);
                }
            }
        }
        //加载下一分类的数据(如果下一分类的数据为空)
        this.loadData();
        this.clickFlag=false;
    }
    handleClick(index){
        this.clickFlag=true;
        this.loadFlag && this.queryGoods(index,this.state.goodsList[index].goods.length).then(()=>{
            this.goodsListRef.current.scrollTop=this.scrollArr[index];
            this.setState({cateIndex:index});
        });
    }
    render(){
        return(
            <div styleName="root">
                <ul styleName="sidebar">
                    {this.state.goodsList.length>0 && this.state.goodsList.map((cateGoods,index)=>{
                        return <li key={index} onClick={this.handleClick.bind(this,index)} className={index===this.state.cateIndex ? "active" :undefined}>{cateGoods.cate_name}</li>
                    })}
                </ul>
                <div styleName="goodsList" ref={this.goodsListRef}>
                    <h4 styleName="fixedTitle" className='fixedTitle' style={this.state.fixedStyle}>{this.state.goodsList.length>0 && `${this.state.goodsList[this.state.curIndex].cate_name}(${this.state.goodsList[this.state.curIndex].count})`}</h4>
                    {
                        this.state.goodsList.map((item,index)=>{
                            return (
                                <div key={index} className='goods-cate-item'>
                                    <h4 styleName="title" className='cate-title'>{`${item.cate_name}(${item.count})`}</h4>
                                    <ul styleName="cate-list">
                                    {
                                        item.goods.length===0 ? <TombElement/>:
                                        item.goods.map(item=>{
                                            return <GoodsItem key={item.ypbm} name={item.ypmc} specification={item.gg}/>;
                                        })
                                    }
                                    </ul>
                                    <h4 styleName="title" style={(this.state.curIndex === index && this.state.navFlag) ? {opacity:1} : {opacity:0}}>{`${item.cate_name}(${item.count})`}</h4>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
export default CSSModules(GoodsList,styles);