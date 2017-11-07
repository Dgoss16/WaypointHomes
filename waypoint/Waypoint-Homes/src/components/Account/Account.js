import React, {Component} from 'react'
import axios from 'axios'


export default class Account extends Component{
    constructor(){
        super()
        this.state={
            accountInfo: {},
            evictedYes: false,
            evictedNo: false,
            bankruptcyYes: false,
            bankruptcyNo: false
        }
    }

    componentDidMount(){
        axios.get('/account').then((res)=>{
            console.log('res.data',res.data[0])
            this.setState({
                accountInfo: res.data[0]
            },()=>{
                if(this.state.accountInfo.eviction == "Yes"){
                    this.setState({
                        evictedYes: true
                    })
                }
                if(this.state.accountInfo.eviction == "No"){
                    console.log('function is firing',this.state.accountInfo.eviction)
                    this.setState({
                        evictedNo: true
                    },()=>{
                        console.log('the real state', this.state)
                    })
                }
                if(this.state.accountInfo.bankruptcy == "Yes"){
                    this.setState({
                        bankruptcyYes: true
                    })
                }
                if(this.state.accountInfo.bankruptcy == "No"){
                    this.setState({
                        bankruptcyNo: true
                    })
                }
            })
        })
    }
    
    render(){
        
        return(
            <div>
                <div>
                    <div>Account</div>
                    <div>First Name:<input type="text" value={this.state.accountInfo.firstname} onChange={(e)=>{
                        var newObj = Object.assign({}, this.state.accountInfo)
                        newObj.firstname = e.target.value
                        this.setState({
                            accountInfo : newObj
                        })
                    }}/></div>
                    <div>Last Name:<input type="text" value={this.state.accountInfo.lastname} onChange={(e)=>{
                        var newObj = Object.assign({}, this.state.accountInfo)
                        newObj.lastname = e.target.value
                        this.setState({
                            accountInfo : newObj
                        })
                    }}/></div>
                    <div>Phone #:<input type="text" value={this.state.accountInfo.phone} onChange={(e)=>{
                        var newObj = Object.assign({}, this.state.accountInfo)
                        newObj.phone = e.target.value
                        this.setState({
                            accountInfo : newObj
                        })
                    }}/></div>
                    <div>Email:<input type="text" value={this.state.accountInfo.email} onChange={(e)=>{
                        var newObj = Object.assign({}, this.state.accountInfo)
                        newObj.email = e.target.value
                        this.setState({
                            accountInfo : newObj
                        })
                    }}/></div>
                    <div>Monthly Income:<input type="text" value={this.state.accountInfo.income} onChange={(e)=>{
                        var newObj = Object.assign({}, this.state.accountInfo)
                        newObj.income = e.target.value
                        this.setState({
                            accountInfo : newObj
                        })
                    }}/></div>
                    <fieldset id="group1" >
                        <div>Have you ever been Evicted:
                        Yes<input type="radio" name="group1" value="Yes" checked={this.state.evictedYes} onClick={()=>{
                        var newObj = Object.assign({}, this.state.accountInfo)
                        newObj.evicted = "Yes"
                        this.setState({
                            accountInfo : newObj
                        })
                    }}/>
                        No<input type="radio" name="group1" value="No" checked={this.state.evictedNo} onClick={()=>{
                        var newObj = Object.assign({}, this.state.accountInfo)
                        newObj.evicted = "No"
                        this.setState({
                            accountInfo : newObj
                        })
                    }}/>
                        </div>
                    </fieldset>
                    <fieldset id="group2" >
                        <div>Have you ever filed for Bankruptcy:
                        Yes<input type="radio" name="group2" value="Yes" checked={this.state.bankruptcyYes} onClick={()=>{
                        var newObj = Object.assign({}, this.state.accountInfo)
                        newObj.bankruptcy = "Yes"
                        this.setState({
                            accountInfo : newObj
                        })
                    }}/>
                        No<input type="radio" name="group2" value="No" checked={this.state.bankruptcyNo} onClick={()=>{
                        var newObj = Object.assign({}, this.state.accountInfo)
                        newObj.bankruptcy = "No"
                        this.setState({
                            accountInfo : newObj
                        })
                    }}/>
                        </div>
                    </fieldset>
                    <div>
                        <select>
                            <option>{this.state.accountInfo.credit}</option>
                            <option value="Greater Than 600">Greater Than 600</option>
                            <option value="Less Than 600">Less Than 600</option>
                            <option value="I Don't Know">I Don't Know</option>
                        </select>
                    </div>
                </div>
            </div>
        )
    }
}