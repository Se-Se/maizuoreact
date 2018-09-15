import React ,{Component} from 'react';
import axios from 'axios';
import mzStorage from '../../bases/baseTools.js';


class ComingSoon extends Component{
	constructor(){
		super();
		this.state={
			filmsList:[]
		};
		this.move=false;
		this.handleDetail=this.handleDetail.bind(this);
		this.handleMove = this.handleMove.bind(this);
	}
	render(){
		return(
           <div className="list">
			<ul>
			{
				this.state.filmsList.map((item)=>{
					return(
						<li key={item.id} onTouchEnd={()=>{this.handleDetail(item.id)}} onTouchMove={this.handleMove}>
							<div className="img"><img src={item.poster.origin} alt=""/></div>
							<div className="info">
						    <p><span>{item.name}</span><span>8.5<i className="iconfont icon-moreunfold"></i></span></p>
						   <p>{item.info}</p>
						    <p><span>{item.cinemaCount}家影院上映</span><span>{item.watchCount}人购票</span></p>
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
		var filmsData = mzStorage.getSession(filmsData);
		if(filmsData){
          this.setState({
          	filmsList:JSON.parse(filmsData)
          })
		}else{
           axios.get('/v4/api/film/coming-soon',{
             params:{
             	page:1,
             	count:7
             }
		}).then((res)=>{
          var msg = res.data.msg;
          if(msg==='ok'){
          	this.setState({
          		filmsList:res.data.data.films
          	})
          	mzStorage.setSession('filmsData',JSON.stringify(this.state.filmsList));
          }
		})
	}
}
	handleMove(){
    this.move=true ;
	}	
	handleDetail(cid){
		if(this.move){
			return this.move=false;
		}else{
          this.props.history.push('/detail/'+cid)
		}
	}
}


export default ComingSoon ;