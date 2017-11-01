import React, { Component } from 'react';
import Footer from '../Navbar/Footer';
import Header from '../Navbar/Header';

class contactUs extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div className='form'>
                <h1>IN NEED OF ASSISTANCE?</h1>
                <h3>We can help! Complete this form and one of our team members will reach out to you shortly.</h3>

                <div>First Name:
                <input/></div>
                <div>Last Name: <input/></div>
                <div>Email Address: <input/></div>
                <div>Phone Number: <input/></div>
                <div>Notes: <textarea cols='40' rows='5'/></div>

                <button>SEND</button>
                </div>

                <div className='call'>
                    <h3>CALL US:</h3>
                    <p>Customer Service: (855) 224-5484</p>
                    <p>Emergency Maintenance Service: (888) 330-4969</p>
                    <p>Non-Emergency Maintenance Service: Resident Service Portal
</p>
                </div>

                <div className='email'>
                    <h3>EMAIL US:</h3>
                    <p> <a href='mailto:resident@waypointhomes.com'>residents@waypointhomes.com</a></p>
                </div>

                <div className='Visit'>
                    <h3>VISIT US:</h3>
                    <p>Find a Waypoint office near you</p>
                </div>
                <Footer/>   
            </div>
        );
    }
}

export default contactUs;