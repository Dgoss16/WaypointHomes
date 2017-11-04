import React, { Component } from 'react';
import Footer from '../Navbar/Footer';
import Header from '../Navbar/Header';
import '../../style/about.css';

class aboutUs extends Component {
    render() {
        return (
            <div className='aboutpage' >
                <Header/>
                <div className='aboutus'>

                    <h3 className='aboutheader'>ABOUT US</h3>
                    <p>
                        <p>The new Waypoint Homes is the rising leader in providing quality, single-family rental homes. Stemming from power players, Colony American Homes and Waypoint Homes, the modern real estate company now owns more than 30,000 homes in 10 states across the United States.</p>
                        

                        <p>Here at Waypoint, we believe renting should be easy. We set ourselves apart, using simplified techniques, and innovative technology to provide reliable homes for our residents.</p>

                        <p>
                        Our priority is ensuring residents receive stability, and maintain a peace of mind. With a reputable team with over 10 years of combined single-family rental experience, we are committed to creating an entrepreneurial environment to deliver superior service.
                        </p>


                        <p>At the new Waypoint Homes, we want to welcome you, to your home!</p>
                        </p>
                </div>
                <Footer/>   
            </div>
        );
    }
}

export default aboutUs;