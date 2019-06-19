import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class landingpage extends Component {
	render(){
		return(
			<div style={{width: '100%', margin: 'auto'}} >
				<Grid className="landing-grid">
					<Cell col={12} >
						<img 
							src="https://www.experiencedpublicadjusters.com/wp-content/uploads/2018/08/avatar-male-off.png"
							alt="avatar"
							className="avatar-img" 
						/>

						<div className="banner-text">
							<h1>test</h1>
						</div>
					</Cell>
				</Grid>
			</div>
		)
	}	
}

export default landingpage;