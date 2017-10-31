import React, { Component } from 'react';
import logo from '../../wplogo.png';
import FontAwesome from 'react-fontawesome';
import {Link} from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div>
                <div className="navbar">
                     <div className="Logo"> <Link to= '/' style={{textDecoration: 'none', color: "white"}}><img src={logo}/> </Link></div>
                     <div className="Home"> <Link to='/' style={{textDecoration: 'none', color: "white"}}> HOME </Link> </div> 
                     <div className="Find">FIND A HOME</div>
                     <div className="About"><Link to="/about" style={{textDecoration: 'none', color: "white"}}>ABOUT</Link></div>
                     <div className="Contact"><Link to="/contact" style={{textDecoration: 'none', color: "white"}}>CONTACT</Link></div>
                     <div className="Login"><Link to="/login" style={{textDecoration: 'none', color: "white"}}>LOGIN</Link> </div>
                </div>



                
            </div>
        );
    }
}

export default Header;