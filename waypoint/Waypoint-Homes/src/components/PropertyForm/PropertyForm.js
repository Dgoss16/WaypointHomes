import React, {Component} from 'react'
import '../../style/T&Cs.css'
import {Link} from 'react-router-dom';
import axios from 'axios'




export default class PropertyForm extends Component{
    constructor(){
        super()
        this.state={
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
            propertyAddress: '',
            code: ''
        }
    }

    componentDidMount(){
        this.setState({
            propertyAddress: JSON.parse(localStorage.getItem('currentProperty')).address1 + ', ' + JSON.parse(localStorage.getItem('currentProperty')).city + ', ' + JSON.parse(localStorage.getItem('currentProperty')).state + ', ' + JSON.parse(localStorage.getItem('currentProperty')).zip,
            code: Math.floor(Math.random() * (99999 - 10000) + 10000)
        }, ()=>{
            console.log(this.state.code)
        })
    }

    formSubmit(){
        axios.post('/form/submit', {
            first: this.state.first,
            last: this.state.last,
            phone: this.state.phone,
            email: this.state.email,
            income: this.state.income,
            eviction: this.state.eviction,
            bankruptcy: this.state.bankruptcy,
            credit: this.state.credit,
            appointmentDate: this.state.appointmentDate,
            appointmentTime: this.state.appointmentTime,
            propertyAddress: this.state.propertyAddress,
            code: this.state.code
        })
    }
    render(){

        return(
            <div>
                 <form className="formContainer">
                    <div>Set Up Your Self Showing</div>
                    <input required type='text' placeholder="First Name" onChange={(e)=>{
                        this.setState({
                            first: e.target.value
                        })
                    }}/>
                    <input required type='text' placeholder="Last Name" onChange={(e)=>{
                        this.setState({
                            last: e.target.value
                        })
                    }}/>
                    <input required type='text' placeholder="(000) 000-0000" onChange={(e)=>{
                        this.setState({
                            phone: e.target.value
                        })
                    }}/>
                    <input required type='text' placeholder="Email" onChange={(e)=>{
                        this.setState({
                            email: e.target.value
                        })
                    }}/>
                    <div>Monthly Gross Household Income</div>
                    <input required type='text' placeholder="HH income" onChange={(e)=>{
                        this.setState({
                            income: e.target.value
                        })
                    }}/>
                    <fieldset id="group1">
                    <div>Have you ever filed for Bankruptcy</div>
                        Yes<input type="radio" name="group1" value="Yes" onClick={()=>{
                        this.setState({
                            bankruptcy: 'yes'
                        })
                    }}/>
                        No<input type="radio" name="group1" value="No" onClick={()=>{
                        this.setState({
                            bankruptcy: "No"
                        })
                    }}/>
                    </fieldset>
                    <fieldset id="group2">
                    <div>Have you ever been Evicted</div>
                        Yes<input required type="radio" name="group2" value="Yes" onClick={()=>{
                        this.setState({
                            eviction : "Yes"
                        })
                    }}/>
                        No<input required type="radio" name="group2" value="No" onClick={()=>{
                        this.setState({
                            eviction : "No"
                        })
                    }}/>
                    </fieldset>
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
                    <input required type="text" placeholder="MM/DD/YY" onChange={(e)=>{
                        this.setState({
                            appointmentDate: e.target.value
                        })
                    }}/>
                    <div>Time</div>
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
                    <button className='submit' onClick={()=>{
                        this.formSubmit()
                    }}>Submit</button>
                    <p className='tc'>By clicking Submit, you have read and agree to our <Link to='/terms'>Terms and Conditions</Link></p>
                </form>
            </div>
        )
    }
}