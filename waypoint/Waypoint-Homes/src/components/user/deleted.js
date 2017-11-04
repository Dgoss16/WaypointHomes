import React, { Component } from 'react';
import Footer from '../Navbar/Footer';
import Header from '../Navbar/Header';
import '../../style/deleted.css';

class deleted extends Component {
    render() {
        return (
            <div className='aboutpage' >
                <Header/>
                <div className='aboutus'>
                    <h3 className='aboutheader'>
                        Sorry to see you go!
                    </h3>
                    <div className='main'>
                        You have succsessfully cancelled your Self-Showing appointment. Hopefully we can help you find your dream home in the near future!
                    </div>
                </div>
                <Footer/>   
            </div>
        );
    }
}

export default deleted;