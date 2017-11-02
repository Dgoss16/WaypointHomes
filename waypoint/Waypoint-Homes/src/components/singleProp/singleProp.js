import React, { Component } from 'react';
import axios from 'axios';
import Footer from '../Navbar/Footer';
import Header from '../Navbar/Header';

class singleProp extends Component {
constructor(){
    super()
    this.state={
        propertyPhotos:'',
        propertyAddress: '',
        photoUrl:'https://cah-com-res.cloudinary.com/',
        imageUrl:"",
        first: '',
        last: '',
        phone: '',
        email:'',
        income: '',
        eviction: '',
        bankruptcy: '',
        credit: '',
        appointmentDate: '',
        appointmentTime: ''
        
    }
}



componentDidMount(){
    axios.get(`https://waypointhomes.com/api/properties/${this.props.propertyInfo.url_slug}`).then((res)=>{
        this.setState({
            imageUrl:this.state.photoUrl + res.data.photos[0].public_id,
            propertyPhotos: res.data.photos,


        }, ()=>{ console.log(this.props.propertyInfo)
        })
    })
}

showImages(){
    if(this.state.propertyPhotos){
        var photos = this.state.propertyPhotos.photos.map((x, i)=>{
            return(
                <div key = {i}>
                    <img src={this.state.photoUrl + x.public_id} alt="pretty house"/>>
                </div>
            )
        })
    }
    return photos
}


    render() {
    var images = []
    if(this.state.propertyPhotos){
        images = this.state.propertyPhotos.map((x, i)=>{
            return(
                <div key = {i}>
                    <img src={this.state.photoUrl + x.public_id} alt="pretty house"/>
                </div>
            )
        })
    }
        return (
            <div>
                <Header/>   
                <div>
                    <div className="Images"> <img src={this.state.imageUrl} alt="pretty house"/></div>
                    <div className="textpropdetails">
                        <div className="propertyImages">
                            {images}
                        </div>
                        <p>Address: {this.props.propertyInfo.address1}</p>
                        <p>City/State/Zip: {this.props.propertyInfo.city}, {this.props.propertyInfo.state}, {this.props.propertyInfo.zip}</p>
                        <p>SquareFeet: {this.props.propertyInfo.squareFeet}</p>
                        <p>Beds :{this.props.propertyInfo.beds}</p>
                        <p>Baths :{this.props.propertyInfo.baths}</p>
                        <p>Description: {this.props.propertyInfo.longDescription}</p>
                        <p>Rent: {this.props.propertyInfo.effectiveRent}</p>                       
                    </div>          
                </div>
               
                <a href={process.env.REACT_APP_LOGIN}><button>Form Test</button></a>
                <Footer/>   
            </div>
        );
    }
}

export default singleProp;