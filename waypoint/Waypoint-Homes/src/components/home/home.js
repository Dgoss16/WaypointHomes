import React, { Component } from 'react';
import '../../style/navbar.css';
import '../../style/home.css'
import axios from 'axios';
import logo from '../../wplogo.png';
import Footer from '../Navbar/Footer';
import Header from '../Navbar/Header';


class allProp extends Component {
    constructor() {
        super();
        this.state={
            allprops:[],
            Url:'https://waypointhomes.com/api/properties?mapBounds=33.210791%2C-112.357154%2C33.553661%2C-111.883369',

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
    
    
    
    
    render() {
        return (
            <div>
               <Header/>


                
            
                <select className="dropDown">
                    <option value="85281">85281</option>
                    <option value="85041">85041</option>
                    <option value="85008">85008</option>
                    <option value="85029">85029</option>
                    <option value="85031">85031</option>
                </select>
            

                <button type="button" onClick={() => {this.handleClick()} }>CLICK MEEHHH</button>




<Footer/>
                
            </div>
        );
    }
}

export default allProp;