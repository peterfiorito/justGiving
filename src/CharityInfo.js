import React, { Component } from 'react';
import generalApiRequestService from './services/apiRequestService'

import './styles/charityInfo.scss'

class CharityInfo extends Component {
  constructor(props){
    super(props);
    this.state = {
      charityInfo: [],
      donations: []
    };
    this.getInitialCharityInfo = this.getInitialCharityInfo.bind(this);
    this.getCharityDonations = this.getCharityDonations.bind(this);
    this.req = new generalApiRequestService;
  }
  componentWillMount(){
    this.getInitialCharityInfo();
    this.getCharityDonations();
  }
  render() {
    return (
      <div className="charity">
        {this.state.charityInfo ? 
          (<div className='charity-info'>
            <h2>{this.state.charityInfo.name}: {this.state.charityInfo.impactStatementWhat}</h2>
            <h3>{this.state.charityInfo.impactStatementWhy}</h3>
            <div className="charity-info__header">
              <div className="charity-info__header--col">
                <p><b>Added: </b>{this.state.charityInfo.dateAddedToJustGiving}</p>
                <p><b>Country: </b>{this.state.charityInfo.countryCode}</p>
                <p><b>Currency: </b>{this.state.charityInfo.currencyCode}</p>
                <p><b>Email: </b>{this.state.charityInfo.emailAddress}</p>
              </div>
              <div className="charity-info__header--col">
                <img className="charity-info__logo" src={this.state.charityInfo.logoAbsoluteUrl} />
              </div>
            </div>
            <p>{this.state.charityInfo.description}</p>
          </div>)
        : (<div><p>Charity Information not available</p></div>)}
        {this.state.donations.length > 0 ? 
        (<div className="charity-info__donations">
          <ul>
            {this.state.donations.map((x, i) =>{
              return (<li key={i}>
                <div className="charity-info__donation">
                  <div className="charity-info__donation--col">
                    <p><b>Name: </b> {x.donorDisplayName}</p>
                    <p><b>Amount: </b>{x.currencyCode} {x.amount}</p>
                    <p><b>Date: </b>{x.donationDate}</p>
                    <p><b>Message: </b>{x.message}</p>
                  </div>
                  <div className="charity-info__donation--col">
                    <img src={x.imageUrl} />
                  </div>
                </div>
              </li>)
            })}
          </ul>
        </div>) 
        : (<div><p>No donations so far</p></div>)}
      </div>
    );
  }
  getInitialCharityInfo(){
    this.req.getCharityInfo(this.props.match.params.id)
    .then((data)=>{
      let info = data.data;
      this.setState({charityInfo: info});
    }).catch((err)=>{
      throw new Error ('Unable to retreive charity info from internal api ' + err);
    })
  }
  getCharityDonations(){
    this.req.getCharityDonations(this.props.match.params.id)
    .then((data)=>{
      this.setState({donations: data.data.donations});
    }).catch((err)=>{
      throw new Error ('Unable to retrieve donations from internal API ' + err);
    })
  }
}

export default CharityInfo;