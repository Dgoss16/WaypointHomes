import React, { Component } from 'react';
import axios from 'axios';
import Footer from '../Navbar/Footer';
import Header from '../Navbar/Header';

class singleProp extends Component {
constructor(){
    super()
    this.state={
        propertyDetails:'',
        photoUrl:'https://cah-com-res.cloudinary.com/',
        imageUrl:""

    }
}



componentDidMount(){
    axios.get('https://waypointhomes.com/api/properties/1738-w-lacewood-pl-phoenix-az-85045-abcc').then((res)=>{
        this.setState({
            imageUrl:this.state.photoUrl + res.data.photos[0].public_id,
            propertyDetails: res.data
        })
    })   
}

    render() {


        return (
            <div>
                <Header/>   
                <div>
                    <div className="Images"> <img src={this.state.imageUrl}/></div>
                    <div className="textpropdetails">
                        <p>{this.state.propertyDetails.street1}</p>
                        <p>{this.state.propertyDetails.cityStateZip}</p>
                        <p>{this.state.propertyDetails.squareFeet}</p>
                        <p>{this.state.propertyDetails.beds}</p>
                        <p>{this.state.propertyDetails.baths}</p>
                        <p>{this.state.propertyDetails.longDescription}</p>
                        <p>{this.state.propertyDetails.effectiveRent}</p>
                       
                    </div>

                </div>
                <Footer/>   
            </div>
        );
    }
}

export default singleProp;