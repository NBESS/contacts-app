import React, { Component } from 'react';

export default class ContactForm extends Component {
    constructor() {
        super();


        this.state = {
            name: '',
            email: '',
            phone_number: '',
            address: '',
            city: '',
            state: '',
            zip_code: '',
        }
    }

    updateState = (e, key) => {
        this.setState({
            [key]: e.target.value,
        });
    }

    handleSubmit = (e)=> {
        e.preventDefault();
        const newContact = 
        { 
            name: this.state.name, 
            email: this.state.email,
            phone_number: this.state.phone_number,
            address: this.state.address,
            city: this.state.city,
            state: this.state.state,
            zip_code: this.state.zip_code,
        };
        this.props.onNewContact(newContact)
        this.setState({
            name: '',
            email: '',
            phone_number: '',
            address: '',
            city: '',
            state: '',
            zip_code: '',
        })
        

    }

    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit} >
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text"name="name" id="name_input" onChange={(e)=> this.updateState(e, 'name')} />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        name="email" 
                        id="email_input"
                        onChange={(e)=> this.updateState(e, 'email')}
                    />
                </div>   
                <div>
                    <label htmlFor="phone_number">Phone Number</label>
                    <input 
                        type="text" 
                        name="phone_number" 
                        id="phone_number_input"
                        onChange={(e)=> this.updateState(e, 'phone_number')}
                    />
                </div>   
                <div>
                    <label htmlFor="address">Address</label>
                    <input 
                        type="text" 
                        name="address" 
                        id="address_input"
                        onChange={(e)=> this.updateState(e, 'address')}
                    />
                </div>   
                <div>
                    <label htmlFor="city">City</label>
                    <input 
                        type="text" 
                        name="city" 
                        id="city_input"
                        onChange={(e)=> this.updateState(e, 'city')}
                    />
                </div>   
                <div>
                    <label htmlFor="state">State</label>
                    <input 
                        type="text" 
                        name="state" 
                        id="state_input"
                        onChange={(e)=> this.updateState(e, 'state')}
                    />
                </div>   
                <div>
                    <label htmlFor="zip_code">Zip Code</label>
                    <input 
                        type="text" 
                        name="zip_code" 
                        id="zip_code_input"
                        onChange={(e)=> this.updateState(e, 'zip_code')}
                    />
                </div>   
                    <button type="submit" >Submit</button>
                </form>
            </div>
        )
    }
}



