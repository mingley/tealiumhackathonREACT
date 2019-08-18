import React, { Component } from 'react';
import axios from 'axios'
import VP from './visitorprofile';

class App extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      visitorProfile: [],
      count: 0
    };
}

componentWillMount(){
  axios
    .get('https://e2nkh9bvqg.execute-api.us-east-2.amazonaws.com/prod/visitorSampler?count=1')
    .then(response => response.data)
    .then(visitorProfile => this.setState( {visitorProfile} ));
}


  render() {
    return (
      <div className='App'>
        
        <div className="container">
          <div className="jumbotron">
          <h1 className="display-4">Your user information</h1>
          <p className="lead">All the information we have collected about you</p>
          </div>
            <div className='jumbotron'>
            {this.state.visitorProfile.map(visitorProfile => (
            <VP
            audiences={visitorProfile.audiences[0]}
            badges={visitorProfile.badges[0]}
            dates={visitorProfile.dates['First Visit']}
            metrics={visitorProfile.metrics}
            properties={visitorProfile.properties}
            
            />))
            }
            </div>
        </div>

      </div>
    );
  }
}

export default App;
