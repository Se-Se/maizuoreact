import React,{Component,Fragment} from 'react';
import './Film.css';
import PlayingNow from '../PlayingNow/PlayingNow.js';
import ComingSoon from '../ComingSoon/ComingSoon.js';
import {Route,Redirect,Switch,NavLink} from 'react-router-dom';


class Film extends Component{
	render(){
		return(
             <Fragment>
             	<div id="mz_film">
				      <div className="tab">
					 <NavLink to="/film/playingnow">正在上映</NavLink>
					 <NavLink to="/film/comingsoon">即将上映</NavLink>

					
				</div>
				<Switch>
					<Route path="/film/playingnow" component={PlayingNow}/>
					<Route path="/film/comingsoon" component={ComingSoon}/>
					<Redirect from="/film" to="/film/playingnow"></Redirect>
				</Switch>
			</div>
           </Fragment>
			);
	}
}

export default Film ;