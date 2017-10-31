import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Home from './components/home/home';
import SingleProp from './components/singleProp/singleProp';
import Favorites from './components/user/favorites';
import AboutUs from './components/aboutUs/aboutUs';
import UserInfo from './components/user/userInfo'
import ContactUs from './components/contactUs/contactUs';
import Properties from './components/Properties/Properties'

class App extends Component {
  constructor(){
    super()
    this.state={
      zip: ''
    }
    this.handleClick = this.handleClick.bind(this)
  }
  
  

  handleClick(x){
    this.setState({
      zip: x
    }, () => {
      console.log(this.state.zip)
    })
    console.log(this.state.zip)
  }
  
  render() {
    return (
      <div className="App">
        <Route exact path='/' render={()=>(
          <Home
            handleClick={this.handleClick}
          />
        )}/>
        <Route path='/properties' render={()=>(
          <Properties 
            zipcode = {this.state.zip}
          />
        )}/>
        <Route path='/property' component={SingleProp}/>
        <Route exact path='/userInfo' component={UserInfo}/>
        <Route path='/userInfo/favorites' component={Favorites}/>
        <Route path='/about' component={AboutUs}/>
        <Route path='/contact' component={ContactUs}/>
      </div>
    );
  }
}

export default App;
