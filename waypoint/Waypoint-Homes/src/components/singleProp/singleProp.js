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
    axios.get(`https://waypointhomes.com/api/properties/${this.props.propertyInfo.url_slug}`).then((res)=>{
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
                        <p>{this.props.propertyInfo.street1}</p>
                        <p>{this.props.propertyInfo.cityStateZip}</p>
                        <p>{this.props.propertyInfo.squareFeet}</p>
                        <p>{this.props.propertyInfo.beds}</p>
                        <p>{this.props.propertyInfo.baths}</p>
                        <p>{this.props.propertyInfo.longDescription}</p>
                        <p>{this.props.propertyInfo.effectiveRent}</p>
                       
                    </div>

                </div>
                <Footer/>   
            </div>
        );
    }
}

export default singleProp;