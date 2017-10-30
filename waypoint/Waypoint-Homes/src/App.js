import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Home from './components/home/home';
import SingleProp from './components/singleProp/singleProp';
import Favorites from './components/user/favorites';
import AboutUs from './components/aboutUs/aboutUs';
import UserInfo from './components/user/userInfo'
import ContactUs from './components/contactUs/contactUs';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path='/' component={Home}/>
        <Route path='/property/:id' component={SingleProp}/>
        <Route exact path='/userInfo' component={UserInfo}/>
        <Route path='/userInfo/favorites' component={Favorites}/>
        <Route path='/about' component={AboutUs}/>
        <Route path='/contact' component={ContactUs}/>
      </div>
    );
  }
}

export default App;
