import React,{Component} from 'react';
import PropTypes from 'prop-types';

class ReactDocumentTitle extends Component{
    setTitle(){
        const {title}=this.props;
        document.title=title;
    }
    componentDidMount(){
        this.setTitle();
    }
    componentDidUpdate(){
        this.setTitle();
    }
    render(){
        return React.Children.only(this.props.children);
    }
}
ReactDocumentTitle.protoTypes={
    title:PropTypes.string.require
};
export default ReactDocumentTitle;