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
            propertyAddress: this.props.propertyInfo.address1


        }, ()=>{
        })
    })
}

showImages(){
    if(this.state.propertyPhotos){
        var photos = this.state.propertyPhotos.photos.map((x, i)=>{
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
    if(this.state.propertyPhotos){
        images = this.state.propertyPhotos.map((x, i)=>{
            return(
                <div key = {i}>
                    <img src={this.state.photoUrl + x.public_id} />
                </div>
            )
        })
    }
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
                    <input type='text' placeholder="First Name" onChange={(e)=>{
                        this.setState({
                            first: e.target.value
                        })
                    }}/>
                    <input type='text' placeholder="Last Name" onChange={(e)=>{
                        this.setState({
                            last: e.target.value
                        })
                    }}/>
                    <input type='text' placeholder="(000) 000-0000" onChange={(e)=>{
                        this.setState({
                            phone: e.target.value
                        })
                    }}/>
                    <input type='text' placeholder="Email" onChange={(e)=>{
                        this.setState({
                            email: e.target.value
                        })
                    }}/>
                    <div>Monthly Gross Household Income</div>
                    <input type='text' placeholder="HH income" onChange={(e)=>{
                        this.setState({
                            income: e.target.value
                        })
                    }}/>
                    <form onChange={(e)=>{
                        this.setState({
                            bankruptcy: e.target.value
                        }, ()=>{
                            console.log(this.state.bankruptcy)
                        })
                    }}>
                    <div>Have you ever filed for Bankruptcy</div>
                        Yes<input type="radio" name="chooseone" value="Yes"/>
                        No<input type="radio" name="chooseone" value="No"/>
                    </form>
                    <form onChange={(e)=>{
                        this.setState({
                            eviction: e.target.value
                        })
                    }}>
                    <div>Have you ever been Evicted</div>
                        Yes<input type="radio" name="chooseone" value="Yes"/>
                        No<input type="radio" name="chooseone" value="No"/>
                    </form>
                    <select onChange={(e)=>{
                        this.setState({
                            credit: e.target.value
                        })
                    }}>
                        <option>-Select-</option>
                        <option value="Greater Than 600">Greater Than 600</option>
                        <option value="Less Than 600">Less Than 600</option>
                        <option value="I Don't Know">I Don't Know</option>
                    </select>
                    <input type="text" placeholder="MM/DD/YY" onChange={(e)=>{
                        this.setState({
                            appointmentDate: e.target.value
                        })
                    }}/>
                    <div>Time</div>
                    <form>
                        <select onChange={(e)=>{
                        this.setState({
                            appointmentTime: e.target.value
                        }, ()=>{
                            console.log(this.state)
                        })
                    }}>
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
                <a href={process.env.REACT_APP_LOGIN}><button>Form Test</button></a>
                <Footer/>   
            </div>
        );
    }
}

export default singleProp;