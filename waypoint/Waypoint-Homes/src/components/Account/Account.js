import React, {Component} from 'react'
import axios from 'axios'


export default class Account extends Component{
    constructor(){
        super()
        this.state={
            accountInfo: {}
        }
    }

    componentDidMount(){
        axios.get('/account').then((res)=>{
            this.setState({
                accountInfo: res.data
            })
        })
    }
    render(){
        return(
            <div>
                <div>
                    <div>Account</div>
                    <input/>
                    <input/>
                    <input/>
                </div>
            </div>
        )
    }
}