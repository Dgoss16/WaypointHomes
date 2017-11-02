import React, {Component} from 'react'





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
        }
    }

    componentDidMount(){
        this.setState({
            propertyAddress: this.props.propertyInfo.address1
        }, ()=>{
            console.log(this.props)
        })
    }
    render(){
        console.log(this.props.propertyInfo)
        return(
            <div>
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
            </div>
        )
    }
}