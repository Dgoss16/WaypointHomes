import React, { Component } from 'react';
import logo from '../../assets/wplogo.png';
import {Link} from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div>
                <div className="navbar">
                     <div className="Logo"> <Link to= '/' style={{textDecoration: 'none', color: "white"}}><img src={logo} alt="waypointhomes"/> </Link></div>
                     <div className="Home"> <Link to='/' style={{textDecoration: 'none', color: "white"}}> HOME </Link> </div> 
                     <div className="About"><Link to="/about" style={{textDecoration: 'none', color: "white"}}>ABOUT</Link></div>
                     <div className="Contact"><Link to="/contact" style={{textDecoration: 'none', color: "white"}}>CONTACT</Link></div>
                     <div className="Account"><a style={{textDecoration: 'none', color: "white"}} href={process.env.REACT_APP_LOGIN}>Account</a></div>
                </div>
            </div>
        );
    }
}

export default Header;