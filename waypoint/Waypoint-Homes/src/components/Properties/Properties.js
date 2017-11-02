import React, {Component} from 'react';
import axios from 'axios'
// import Footer from '../Navbar/Footer';
import Header from '../Navbar/Header';
import './Properties.css';
import {Link} from 'react-router-dom'
import '../../style/props.css';

export default class Properties extends Component{
    constructor(){
        super()
        this.state={
            properties: [],
            propertiesUrl: '',
            currentProperty: ''
        }
    }

    // getAllProperties(){
    //     axios.get('/api/allproperties').then((response)=>{

    //     })
    // }

    componentDidMount(){
            switch(this.props.zipcode){
                case '85281':
                axios.get('https://waypointhomes.com/api/properties?mapBounds=33.35066%2C-112.046321%2C33.521989%2C-111.809429').then((res)=>{
                    this.setState({
                        properties:  res.data,
                        currentProperty: 'https://waypointhomes.com/api/properties?mapBounds=33.35066%2C-112.046321%2C33.521989%2C-111.809429'
                    })
                })
                break;
                case '85041': 
                axios.get('https://waypointhomes.com/api/properties?mapBounds=33.210791%2C-112.357154%2C33.553661%2C-111.883369').then((res)=>{
                    this.setState({
                        properties:  res.data,
                        currentProperty: 'https://waypointhomes.com/api/properties?mapBounds=33.210791%2C-112.357154%2C33.553661%2C-111.883369'
                    })
                })
                break;
                case '85008':
                axios.get('https://waypointhomes.com/api/properties?mapBounds=33.37735%2C-112.106334%2C33.548625%2C-111.869442').then((res)=>{
                    this.setState({
                        properties:  res.data,
                        currentProperty: 'https://waypointhomes.com/api/properties?mapBounds=33.37735%2C-112.106334%2C33.548625%2C-111.869442'
                    })
                })
                break;
                case '85029':
                axios.get('https://waypointhomes.com/api/properties?mapBounds=33.505631%2C-112.226193%2C33.676653%2C-111.989301').then((res)=>{
                    this.setState({
                        properties:  res.data,
                        currentProperty: 'https://waypointhomes.com/api/properties?mapBounds=33.505631%2C-112.226193%2C33.676653%2C-111.989301'
                    })
                })
                break;
                case '85031':
                axios.get('https://waypointhomes.com/api/properties?mapBounds=33.411172%2C-112.286579%2C33.582381%2C-112.049686').then((res)=>{
                    this.setState({
                        properties:  res.data,
                        currentProperty: 'https://waypointhomes.com/api/properties?mapBounds=33.411172%2C-112.286579%2C33.582381%2C-112.049686'
                    })
                })
                break;
                default: 
                return 
            };
    }
    
    exampleMap(){
        var List = this.state.properties.map((x, i)=>{
            return(
                <div className='oneprop' key={i}>
                    <div className='fix'>
                    <Link className='imgcontainer' to="/property"><img className='img' src={`https://cah-com-res.cloudinary.com/${x.location}` }alt="pretty house" onClick={()=>{
                       this.props.currentProperty(x), localStorage.setItem('currentProperty', JSON.stringify(x))
                   }}/></Link>                
                    <div className='propinfo'>
                    <h3>{x.address1}</h3>
                    <div>{x.city}, {x.state} {x.zip}</div>
                   
                    <div>${x.effectiveRent}</div>
                    <div>{x.beds} Beds </div>
                    <div>{x.baths} Baths</div>
                    <div>{x.squareFeet} Sqft</div>
                    </div>
                    </div>

                </div>
            )
        })
        return List
    }

    render(){
        console.log(JSON.parse(localStorage.getItem('currentProperty')))
        return(
            <div className="bigone">
                <Header/>
                {this.exampleMap()}
                <div>{this.state.propertiesUrl}</div>
            </div>
        )
    }
    
}