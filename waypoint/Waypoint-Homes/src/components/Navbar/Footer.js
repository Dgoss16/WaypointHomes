import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';


class Footer extends Component {
    render() {
        return (
            <div>
                


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
        );
    }
}

export default Footer;