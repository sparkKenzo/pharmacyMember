import React,{Component} from 'react';
import CSSModules from 'react-css-modules';
import styles from './pharmacyChoose.css';
import ReactDocumentTitle from '../common/reactDocumentTitle/reactDocumentTitle';
import ListItem from './listItem/listItem';
import logo from './images/logo1.png';

class PharmacyChoose extends Component{
    constructor(props){
        super(props);
        this.state={
            stores:[
                {
                    logo:logo,
                    name:'同善堂大药房',
                    address:'四川省成都市武侯区玉林路166号',
                    labels:['惠民','便捷','安全','医保'],
                },
                {
                    logo:logo,
                    name:'德阳市佛心堂',
                    address:'四川省成都市武侯区玉林路166号',
                    labels:['惠民','便捷','安全','医保'],
                }
            ]
        };
        this.handleClick=this.handleClick.bind(this);
    }
    handleClick(){
        const {history}=this.props;
        history.push('bindMember');
    }
    render(){
        return (
            <ReactDocumentTitle title='药店选择'>
                <div styleName="root">
                    <ul styleName="list">
                        {
                            this.state.stores.map((store,index)=>(
                                <ListItem key={index} {...store} onClick={this.handleClick}/>
                            ))
                        }
                    </ul>
                </div>
            </ReactDocumentTitle>
        )
    }
}
export default CSSModules(PharmacyChoose,styles);