import React,{Component} from 'react';
import CSSModules from 'react-css-modules';
import styles from './swiper.css';

class Swiper extends Component{
    constructor(props){
        super(props);
        this.containerRef=React.createRef();
        this.state={
            now:1
        };
        this.opts={
            distance:'100',
            unit:'vw',
            len:this.props.list.length,
            interval:2000
        };
        if(this.props.width){
            const reg = /(^\d+)([a-zA-Z]+)/;
            const matches=this.props.width.match(reg);
            this.opts.distance=matches[1];
            this.opts.unit=matches[2] || 'px';
        }
    }
    componentDidMount(){
        this.containerRef.current.style.width=this.opts.len*this.opts.distance+this.opts.unit;
        if(this.opts.len>1) {
            this.containerRef.current.style.transition = "all 0.5s ease-in-out";
            this.containerRef.current.addEventListener("transitionend", () => {
                if (this.state.now === 1) {
                    this.containerRef.current.style.transition = "all 0s";
                    this.containerRef.current.style.transform = `translate3D(0,0,0)`;
                }
            });
            this.timerId=setInterval(() => {
                const movingDistance = this.state.now * this.opts.distance+this.opts.unit;
                if (this.state.now === 1) {
                    this.containerRef.current.style.transition = "all 0.5s ease-in-out";
                }
                this.containerRef.current.style.transform = `translate3D(-${movingDistance},0,0)`;
                this.opts.now++;
                this.setState((preveSate)=>({
                    now:++preveSate.now
                }));
                if (this.state.now >= this.opts.len) {
                    this.setState({now:1});
                }
            }, this.opts.interval);
        }
    }
    componentWillUnmount(){
        clearInterval(this.timerId);
    }
    render(){
        const realList=this.props.list.slice(0,-1);
        return (
            <div styleName="root">
                <div styleName="container" ref={this.containerRef}>
                    {this.props.list}
                </div>
                <div styleName="nav-box">
                    {realList.map((item,index)=>{
                        if(index === (this.state.now-1)){
                            return <span key={index} styleName="nav-item-active"/>
                        }else{
                            return <span key={index} styleName="nav-item"/>
                        }
                    })}
                </div>
            </div>
        )
    }
}
export default CSSModules(Swiper,styles);