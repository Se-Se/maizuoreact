import React,{Component,Fragment} from 'react';
import './Movie.css';
import axios from 'axios';
import {withRouter} from 'react-router-dom';

class Movie extends Component{
	constructor(){
		super();
		this.state={
			movieList:[]
		};
         this.isMove=false;
         this.handleMove=this.handleMove.bind(this);
         this.handleDetail=this.handleDetail.bind(this);

	}
	render(){
		return(
                  <div id="mz_movie">
				   <ul>
				   {
				   	this.state.movieList.map((item,index)=>{
				   		return( <li key={item.id} onTouchMove={this.handleMove} onTouchEnd={()=>{this.handleDetail(item.id)}}>
									 <img src={item.cover.origin} alt=""/>
									 <div className="info">
										<div className="title">
											<p>{item.name}</p>
											<p>{item.scheduleCount}家影院上映{item.watchCount}人购票</p>
										</div>
										<div className="score">{item.grade}</div>
									</div>
				   				</li>
				   				);
				    	})
				     }
					   

				   </ul>
			  </div>	
            

			);
	}
      componentDidMount(){
        axios.get('/v4/api/film/now-playing',{
        	params:{
        		page:1,
                count:5
        	}
        }).then((res)=>{
          var msg= res.data.msg ;
          if(msg==='ok'){
          	this.setState({
             movieList:res.data.data.films
          	});
          }
        });
        
      }
      handleMove(){
        	this.isMove=true 
        }
        handleDetail(cid){
        	if(this.isMove){
              this.isMove=false
        	}else{
          this.props.history.push('/detail/'+cid);
        	}
        }

}


export default withRouter(Movie)  ;