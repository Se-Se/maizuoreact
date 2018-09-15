import React ,{Component,Fragment} from 'react';
import './Nav.css';
import {connect} from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {NavLink} from 'react-router-dom'



class NavUI extends Component{
	render(){
		return(
           <Fragment>
           <ReactCSSTransitionGroup transitionName="navSlide" transitionEnterTimeout={0}
            transitionLeaveTimeout={0}>
           	  {
           	this.props.navShow &&
           	    	<div id="mz_menu" onClick={this.props.handleNavHide}>
		<ul>
			<li><NavLink to='/home'>首页<i className="iconfont icon-moreunfold"></i></NavLink></li>
			<li><NavLink to='/film'>影片<i className="iconfont icon-moreunfold"></i></NavLink></li>
			<li><NavLink to='/home'>影院<i className="iconfont icon-moreunfold"></i></NavLink></li>
			<li><NavLink to='/home'>商城<i className="iconfont icon-moreunfold"></i></NavLink></li>
			<li><NavLink to='/home'>我的<i className="iconfont icon-moreunfold"></i></NavLink></li>
			<li><NavLink to='/home'>卖座卡<i className="iconfont icon-moreunfold"></i></NavLink></li>
		</ul>
	   </div>
           }
           </ReactCSSTransitionGroup>
         
       
           </Fragment>
			);
	}
}
function mapStateToProps(state){
	return {
		navShow:state.navShow 
	};
}
function mapDispatchToProps(dispatch){
	return {
       handleNavHide(){
       	dispatch({type:'CHANGE_NAVSHOW',payload:false})
       }
	}
}
var Nav = connect(mapStateToProps , mapDispatchToProps)( NavUI );


export default Nav ;