import React, { Component } from 'react';
import axios from 'axios';
import Footer from '../Navbar/Footer';
import Header from '../Navbar/Header';
import Carousel from 'nuka-carousel';
import '../../style/singleprops.css';
import {Link} from 'react-router-dom'
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
        appointmentTime: '',
        favorite: false
        
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

updateFavorite() {
    this.setState({favorite: true})
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
    console.log(this.state.favorite);
        var images = []
    if(this.state.propertyPhotos){
        images = this.state.propertyPhotos.map((x, i)=>{
            return(
                <div  key = {i}>
                    <img src={this.state.photoUrl + x.public_id} alt="pretty house"/>
                </div>
            )
        })
    }
        return (
            <div >
                <Header/>   

                <div className="headline">
                    <div>
                    <h3>{this.props.propertyInfo.address1}</h3>
                        <p>{this.props.propertyInfo.city}, {this.props.propertyInfo.state} {this.props.propertyInfo.zip}</p>
                    </div>
                        <h3>Beds: {this.props.propertyInfo.beds}</h3>
                        <h3>Baths: {this.props.propertyInfo.baths}</h3>
                        <h3>SquareFeet: {this.props.propertyInfo.squareFeet}</h3>
                        <h3>Rent: ${this.props.propertyInfo.effectiveRent}</h3>  
                        </div>

                    <h1 className='descriptionTitle'>About this Property</h1>
                    <button className='favoriteButton' onClick={() => this.setState({ favorite: true })}>Favorite</button>
                    
                    <div className='descriptionContainer'>
                        <h4>{this.props.propertyInfo.longDescription}</h4>                     
                         
                    </div> 
                     <div>

                    </div>

                    <div className='imgcontainer2'>
                        <Carousel className=''>
                            {images}
                        </Carousel>
                    </div>
                        
                        
                
                
               <Link to="/property/form"><button>Form Test</button></Link>
                <Footer/>   
            </div>
        );
    }
}

export default singleProp;