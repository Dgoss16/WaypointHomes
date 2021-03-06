import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Home from './components/home/home';
import SingleProp from './components/singleProp/singleProp';
import Favorites from './components/user/favorites';
import AboutUs from './components/aboutUs/aboutUs';
import UserInfo from './components/user/userInfo'
import ContactUs from './components/contactUs/contactUs';
import Properties from './components/Properties/Properties';
import PropertyForm from './components/PropertyForm/PropertyForm';
import Terms from './components/user/tc';
import Deleted from './components/user/deleted';
import Account from './components/Account/Account'

class App extends Component {
  constructor(){
    super()
    this.state={
      zip: '',
      currentProperty: {}
    }
    this.handleClick = this.handleClick.bind(this)
    this.currentProperty = this.currentProperty.bind(this)
  }

  currentProperty(x){
    this.setState({
      currentProperty: x
    }, ()=>{
      console.log(this.state.currentProperty)
    })
  }

  handleClick(x){
    this.setState({
      zip: x
    }, () => {
      console.log(this.state.zip)
    }) 
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
            currentProperty = {this.currentProperty}
          />
        )}/>
        <Route exact path='/property' render={()=>(
          <SingleProp propertyInfo = {this.state.currentProperty}/>
        )}/>
        <Route path='/property/form' render={()=>(
          <PropertyForm propertyInfo = {this.state.currentProperty}/>
        )}/>
        <Route path='/account' render={()=>(
          <Account/>
        )}/>
        <Route exact path='/userInfo' component={UserInfo}/>
        <Route path='/userInfo/favorites' component={Favorites}/>
        <Route path='/about' component={AboutUs}/>
        <Route path='/contact' component={ContactUs}/>
        <Route path='/terms' component={Terms}/>
        <Route path='/deleted' component={Deleted}/>
      </div>
    );
  }
}

export default App;
