import React, {Component} from 'react';
import axios from 'axios'

export default class Properties extends Component{
    constructor(){
        super()
        this.state={
            properties: [],
            propertiesUrl: ''
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
                        properties:  res.data
                    })
                });
                case '85041': 
                axios.get('https://waypointhomes.com/api/properties?mapBounds=33.210791%2C-112.357154%2C33.553661%2C-111.883369').then((res)=>{
                    this.setState({
                        properties:  res.data
                    })
                });
                case '85008':
                axios.get('https://waypointhomes.com/api/properties?mapBounds=33.37735%2C-112.106334%2C33.548625%2C-111.869442').then((res)=>{
                    this.setState({
                        properties:  res.data
                    })
                });
                case '85029':
                axios.get('https://waypointhomes.com/api/properties?mapBounds=33.505631%2C-112.226193%2C33.676653%2C-111.989301').then((res)=>{
                    this.setState({
                        properties:  res.data
                    })
                });
                case '85031':
                axios.get('https://waypointhomes.com/api/properties?mapBounds=33.411172%2C-112.286579%2C33.582381%2C-112.049686').then((res)=>{
                    this.setState({
                        properties:  res.data
                    })
                });
            }
    }
    
    exampleMap(){
        var List = this.state.properties.map((x, i)=>{
            return(
                <div key={i}>
                    <img src={`https://cah-com-res.cloudinary.com/${x.location}`}/>
                    <div>$$$${x.effectiveRent}</div>
                    <div>{x.address1}</div>
                </div>
            )
        })
        return List
    }

    render(){
        return(
            <div>
                {this.exampleMap()}
                <div style={{color: 'blue'}}>Hello</div>
                <div>{this.state.propertiesUrl}noice</div>
            </div>
        )
    }
    
}