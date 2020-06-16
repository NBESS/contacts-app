import React, { Component } from 'react';


export default class Contact extends Component {
    render() {

        return (
            <div className="contactList">
                <h2>Contacts</h2>
                <div className="contactList">
                <h3 className="Contact_name">{contacts.name}</h3>
                <div className="locationData">
                    <span className="location">{contacts.city}, </span>
                    <span className="location">{contacts.state}</span>
                    <span className="location"> {contacts.zip_code}</span>
                </div>
                <div className={`remaining_details ${is_displayed ? 'is_displayed' : ''} `}>
                    <button onClick={}></button>
                </div>
                
            </div>
            </div>
        )
    }
}