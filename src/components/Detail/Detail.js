import React ,{Component,Fragment} from 'react';
import './Detail.css';
import axios from 'axios';
// import mzStorage from '../../bases/baseTools.js';
import {connect} from 'react-redux';





class DetailUI extends Component{
	constructor(){
		super();
		this.state={
			filmData:{}
		}
	}
	render(){
		return(
            <Fragment>
            	<div id="mz_detail">
            	
                       
                            <img src={this.state.filmData.cover&&this.state.filmData.cover.origin} alt=""/>
							<div className="info">
								<h2>影片简介</h2>
								<dl>
									<dt>导&nbsp;&nbsp;&nbsp;演：</dt>
									<dd>{this.state.filmData.director}</dd>
								</dl>
								<dl>
									<dt>主&nbsp;&nbsp;&nbsp;演：</dt>
									<dd>
										{
											this.state.filmData.actors&&this.state.filmData.actors.map((item,index)=>{
                                                  if(index===0){
                                                  	return item.name
                                                  }else{
                                                  	return '|'+item.name ;
                                                  }
											})
										}
									</dd>
								</dl>
								<dl>
									<dt>地区语言：</dt>
									<dd>{this.state.filmData.language}</dd>
								</dl>
								<dl>
									<dt>类&nbsp;&nbsp;&nbsp;型：</dt>
									<dd>{this.state.filmData.category}</dd>
								</dl>
								<dl>
									<dt>上映日期：</dt>
									<dd>{this.formatTime(this.state.filmData.premiereAt)}</dd>
								</dl>
								<p>{this.state.filmData.synopsis}</p>
							</div>
                       	 </div>

            </Fragment>
			);
	}
	componentDidMount(){
		// var film = mzStorage.getSession('film');
		// if(film){
		// 	this.setState({
		// 		filmData:JSON.parse(film)
		// 	})
		// } else{
			var cid = this.props.match.params.cid ;
			axios.get('/v4/api/film/'+cid).then((res)=>{
             var msg = res.data.msg ;
             if(msg==="ok"){
             	this.setState({
             		filmData:res.data.data.film
             	});
             	// mzStorage.setSession('film',JSON.stringify(this.state.filmData))
             	this.props.changeFilmName(this.state.filmData.name)
              }
		  })
	    }
	   	 formatTime(premiereAt){
	   	if(premiereAt){
           var date = new Date();
             date.setTime(premiereAt)
             return (date.getMonth()+1) +'月'+ date.getDate() + '日上映'
	   	}
	   else{
	   	return '';
	   }
		
	}
}
function mapStateToProps(state){
	return {}
}
function mapDispatchToProps(dispatch){
	return {
		changeFilmName(filmName){
			dispatch({ type:'CHANGE_FILMNAME',payload:filmName})
		}
	}
}
var Detail = connect(mapStateToProps,mapDispatchToProps)(DetailUI)
export default Detail ;