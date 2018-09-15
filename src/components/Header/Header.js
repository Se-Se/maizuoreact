import React ,{Component,Fragment} from 'react';
import './Header.css';
import {connect} from 'react-redux'


class HeaderUI extends Component{
	render(){
		return(
           <Fragment>
           	<div id="mz_head">
			<div className="menu" onClick={()=>{this.props.changeNavShow(this.props.navShow)}}><i className="iconfont icon-category"></i></div>
			<div className="title">{this.props.filmName}</div>
			<div className="city">哈尔滨 <i className="iconfont icon-moreunfold"></i></div>
			<div className="user"><i className="iconfont icon-account"></i></div>
	</div>
           </Fragment>
			);
	}
}
function mapStateToProps(state){
	return{
      navShow:state.navShow,
      filmName:state.filmName
	};
}
function mapDispatchToProps(dispatch){
	return {
         changeNavShow(isNavShow){
         	dispatch({type:'CHANGE_NAVSHOW',payload:!isNavShow})
         }

	};
}
var Header = connect(mapStateToProps,mapDispatchToProps)(HeaderUI)
export default Header ;