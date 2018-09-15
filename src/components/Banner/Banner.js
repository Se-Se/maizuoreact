import React ,{Component,Fragment} from 'react';
import './Banner.css';
import axios from 'axios';


class Banner extends Component{
	constructor(){
		super();
		this.state={
			bannerList:[]
		}
	}
	render(){
		return(
             <Fragment>
             	<div id="mz_banner" className="swiper-container" ref="mz_banner">
		    <ul className="swiper-wrapper">
		    {
                this.state.bannerList.map((item,index)=>{
                 return (
                       <li className="swiper-slide" key={item.id}><img src={item.imageUrl} alt=""/>
                       </li>
                 	);
                })
		    }
			
		   </ul>
	        </div>
             </Fragment>

			);
	}
	componentDidMount(){
		axios.get('/v4/api/billboard/home').then((res)=>{
          var msg = res.data.msg ;
          if(msg==='ok'){
          	this.setState({
          		bannerList:res.data.data.billboards
          	})
          	
             new window.Swiper(this.refs.mz_banner,{
                  loop:true
             });
          }
		});
	}
}


export default Banner ;