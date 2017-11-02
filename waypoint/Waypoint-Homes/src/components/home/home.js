import React, { Component } from 'react';
import '../../style/navbar.css';
import '../../style/home.css';
import axios from 'axios';
import Footer from '../Navbar/Footer';
import Header from '../Navbar/Header';
import {Link} from 'react-router-dom'


class allProp extends Component {
    constructor(props) {
        super(props);
        this.state={
            allprops:[],
            Url:'https://waypointhomes.com/api/properties?mapBounds=33.210791%2C-112.357154%2C33.553661%2C-111.883369',
            zip:'85281'
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
            <Header/>
                    <select className="dropDown" onChange={(e) => this.handleChange(e)}>
                        <option value="">Select a Zipcode</option>
                        <option value="85281">85281</option>
                        <option value="85041">85041</option>
                        <option value="85008">85008</option>
                        <option value="85029">85029</option>
                        <option value="85031">85031</option></select>
                        
                    <Link to="/properties"><button type="button" className='ghost-button-border-color' onClick={() => {this.props.handleClick(this.state.zip)} }>Search for homes!</button></Link>
                
            <Footer/>
        </div>
        );
    }
}

export default allProp;