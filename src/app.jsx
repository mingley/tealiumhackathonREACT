import React, { Component } from 'react';
import axios from 'axios'
import VP from './visitorprofile';

class App extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
        visitorProfile: [],
        count: 0,
        audiences: true,
        badges: true,
        flags: true,
        metrics: true,
        property: true,
        currentVisit: true,
        vp: true,
        mounted: false
    };
}

componentWillMount(){
  axios
    .get('https://e2nkh9bvqg.execute-api.us-east-2.amazonaws.com/prod/visitorSampler?count=1')
    .then(response => response.data)
    .then(visitorProfile => this.setState( {visitorProfile}))
}

componentDidMount(){
  if(!this.state.mounted){
    this.setState({mounted: true})
    
  }
}

handleClick(name){
  // this.setState({name: !this.state.name})
}


  render() {
      let audience
      let badge
      let metric
      let date
      if(this.state.visitorProfile.size !=0){
        if(this.state.audiences){
          audience = visitorProfile.audiences[0]
        } else {
          audience = ''
        }
        if(this.state.badges){
          badge = visitorProfile.badges[0]
        } else {
          badge = ''
        }
        if(this.state.metrics){
          metric = visitorProfile.metrics
        } else {
          metric = ''
        }
        if(this.state.dates){
          date = visitorProfile.dates['First Visit']
        } else {
          date = ''
        }
      }
      
    return (
      <div className='App'>
        <div style={styles.radioButtons}>
            <input type='radio' onClick={this.handleClick(name)} name='audiences' />
              Audiences <br/>
            <input type='radio' onClick={this.handleClick(name)} name='badges' />
              Badges <br/>
            <input type='radio' onClick={this.handleClick(name)} name='flags' />
              Flags <br/>
            <input type='radio' onClick={this.handleClick(name)} name='metrics' />
              Metrics <br/>
            <input type='radio' onClick={this.handleClick(name)} name='property' />
              Properties <br />
        </div>
        <div style={styles.content}>
          <div className="container">
            <div className="jumbotron">
              <h1 className="display-4">Your user information</h1>
              <p className="lead">A list of your info</p>
            </div>
            <div className='jumbotron'>
              {this.state.visitorProfile.map(visitorProfile => (
              <VP
              audiences={audience}
              badges={badge}
              dates={date}
              metrics={metric}
              />))
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  radioButtons: {
    width: '30%'
  },
  content: {
    width: '70%'
  }
}

export default App;
