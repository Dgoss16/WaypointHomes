import React, { Component } from 'react';
import '../../style/navbar.css';
import axios from 'axios';
import logo from '../../wplogo.png';
import {Link} from 'react-router-dom';
import FontAwesome from 'react-fontawesome';


class allProp extends Component {
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
                       
                      <div className="footer">
                         <a href= 'https://www.facebook.com/WaypointHomes/' style={{textDecoration: 'none', color: "white"}}> <FontAwesome name='facebook-square' />
                         </a>

                         <a href='https://twitter.com/waypointhomes' style={{textDecoration: 'none', color: "white"}}>
                         <FontAwesome name='twitter' />
                         </a>

                         <a href='' style={{textDecoration: 'none', color: "white"}}>
                         <FontAwesome name=''/>
                         </a>

                         <a href='' style={{textDecoration: 'none', color: "white"}}>
                         <FontAwesome name=''/>
                         </a>
                         
                         <a href='' style={{textDecoration: 'none', color: "white"}}>
                         <FontAwesome name=''/>
                         </a>
                     </div>
                
            </div>
        );
    }
}

export default allProp;