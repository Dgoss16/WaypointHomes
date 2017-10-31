import React, { Component } from 'react';
import '../../style/navbar.css';
import '../../style/home.css';
import axios from 'axios';
import logo from '../../wplogo.png';
import {Link} from 'react-router-dom';
import FontAwesome from 'react-fontawesome';


class allProp extends Component {
    constructor(props) {
        super(props);
        this.state={
            allprops:[],
            Url:'https://waypointhomes.com/api/properties?mapBounds=33.210791%2C-112.357154%2C33.553661%2C-111.883369',
            zip:''
        }
    }
    

    handleClick(){
        axios.get( this.state.Url)
        .then((response) => {
            this.setState({
                allprops: response.data    
            })
            console.log(response.data)
        })
    }
    
    handleChange(event) {
        let value = event.target.value;
        
        this.setState({
            zip: value
        }, ()=>{console.log(this.state.zip)});
    }
    
    
    render() {
        return (
        <div>
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
                
                <div id="shop">
                    <div className="content">
                        <img src="https://cah-com-res.cloudinary.com/image/upload/s--J2BLfUso--/q_jpegmini:1/v1452056288/assets/CSH-Waypoint-Carousel-Slider-5_400k.jpg"/> 
                            <select className="dropDown" onChange={(e) => this.handleChange(e)}>
                                <option value="85281">85281</option>
                                <option value="85041">85041</option>
                                <option value="85008">85008</option>
                                <option value="85029">85029</option>
                                <option value="85031">85031</option>
                            </select>
                            <button type="button" onClick={() => {this.handleClick()} }>CLICK MEEHHH</button>
                    </div>

                    <div className="footer">
                         <a href= 'https://www.facebook.com/WaypointHomes/' style={{textDecoration: 'none', color: "white"}}> <FontAwesome name='facebook-square' />
                         </a>

                         <a href='https://twitter.com/waypointhomes' style={{textDecoration: 'none', color: "white"}}>
                         <FontAwesome name='twitter' />
                         </a>

                         <a href='https://plus.google.com/+WaypointHomesRiverside' style={{textDecoration: 'none', color: "white"}}>
                         <FontAwesome name='google-plus'/>
                         </a>

                         <a href='https://www.youtube.com/channel/UCi_f2fdwgV9HIrj_FXPOimw' style={{textDecoration: 'none', color: "white"}}>
                         <FontAwesome name='youtube-square'/>
                         </a>
                         
                         <a href='https://www.pinterest.com/waypoint_homes/' style={{textDecoration: 'none', color: "white"}}>
                         <FontAwesome name='pinterest'/>
                         </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default allProp;