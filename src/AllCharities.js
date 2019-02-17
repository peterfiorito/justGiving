import React, { Component } from 'react';
import generalApiRequestService from './services/apiRequestService'
import { Link } from 'react-router-dom'

import './styles/allCharities.scss'

class AllCharities extends Component {
	constructor(props){
		super(props);
		this.state = {
			charities: []
		};
		this.getAllCharities = this.getAllCharities.bind(this);
		this.req = new generalApiRequestService;
	}
  componentWillMount(){
		this.getAllCharities();
  }
  render() {
    return (
        <div className="all-charities">
            <h1>Choose a charity</h1>
						{this.state.charities.length > 0 ? 
						(<div className="all-charities__list">
							<ul>
								{this.state.charities.map((charity)=>{
									return (
									<li key={charity.id}>
										<img src={charity.img} />
										<Link to={`/charity/${charity.id}`} className="all-charities__link">{charity.name}</Link>
									</li>)
								})}
							</ul>
						</div>) 
						: (<p>No charities available</p>)}
        </div>
    );
	}
	getAllCharities() {
		this.req.getAllCharities()
		.then((data)=>{
			this.setState({charities: data.data});
		}).catch((err)=>{
			throw new Error ("Error requesting charity list to internal API " + err);
		})
	}
}

export default AllCharities;
