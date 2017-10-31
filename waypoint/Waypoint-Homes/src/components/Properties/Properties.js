import React, {Component} from 'react';


export default class Properties extends Component{
    constructor(){
        super()
        this.state={
            example: [
                {
                    state: 'nj',
                    zip: '07650'
                },
                {
                    state: 'ny',
                    zip: '11362'
                },
                {
                    state: 'nj',
                    zip: '07650'
                }
            ]
        }
    }

    // getAllProperties(){
    //     axios.get('/api/allproperties').then((response)=>{

    //     })
    // }
    
    exampleMap(){
        console.log(this.state.example)
       var List = this.state.example.map((x, i)=>{
            if(x.zip === '07650'){
                console.log(x.state)
                return (<div key={i}>
                            <div>{x.state}</div>
                        </div>
                )
            }
        })
        return(<div className="list" style={{color: 'blue'}}>{List}</div>)
    }

    render(){
        return(
            <div>
                {this.exampleMap()}
                <div style={{color: 'blue'}}>Hello</div>
            </div>
        )
    }
    
}