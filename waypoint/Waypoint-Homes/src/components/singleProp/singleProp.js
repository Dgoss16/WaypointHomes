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
        imageUrl:"",
        customerInfo: {
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
}



componentDidMount(){
    axios.get(`https://waypointhomes.com/api/properties/${this.props.propertyInfo.url_slug}`).then((res)=>{
        this.setState({
            imageUrl:this.state.photoUrl + res.data.photos[0].public_id,
            propertyDetails: res.data.photos
        }, ()=>{
        })
    })
}

showImages(){
    if(this.state.propertyDetails){
        var photos = this.state.propertyDetails.photos.map((x, i)=>{
            return(
                <div key = {i}>
                    <img src={this.state.photoUrl + x.public_id} />>
                </div>
            )
        })
    }
    return photos
}


    render() {
    var images = []
    if(this.state.propertyDetails){
        images = this.state.propertyDetails.map((x, i)=>{
            return(
                <div key = {i}>
                    <img src={this.state.photoUrl + x.public_id} />
                </div>
            )
        })
    }
console.log(this.state.propertyDetails)
        return (
            <div>
                <Header/>   
                <div>
                    <div className="Images"> <img src={this.state.imageUrl}/></div>
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
                <div className="formContainer">
                    <div>Set Up Your Self Showing</div>
                    <input type='text' placeholder="First Name"/>
                    <input type='text' placeholder="Last Name"/>
                    <input type='text' placeholder="(000) 000-0000"/>
                    <input type='text' placeholder="Email"/>
                    <div>Monthly Gross Household Income</div>
                    <input type='text' placeholder="HH income"/>
                    <form>
                        Yes<input type="radio" name="chooseone"/>
                        No<input type="radio" name="chooseone"/>
                    </form>
                    <form>
                        Yes<input type="radio" name="chooseone"/>
                        No<input type="radio" name="chooseone"/>
                    </form>
                    <select>
                        <option>-Select-</option>
                        <option>Greater Than 600</option>
                        <option>Less Than 600</option>
                        <option>I Don't Know</option>
                    </select>
                    <input type="text" placeholder="MM/DD/YY"/>
                    <div>Time</div>
                    <form>
                        <select>
                            <option>9am</option>
                            <option>10am</option>
                            <option>11am</option>
                            <option>12pm</option>
                            <option>1pm</option>
                            <option>2pm</option>
                            <option>3pm</option>
                            <option>4pm</option>
                            <option>5pm</option>
                            <option>6pm</option>
                            <option>7pm</option>
                        </select>
                    </form>
                </div>
                <Footer/>   
            </div>
        );
    }
}

export default singleProp;