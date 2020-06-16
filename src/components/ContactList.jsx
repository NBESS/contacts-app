import React, { Component } from 'react';

export default class ContactList extends Component {
    constructor() {
        super();

        this.state = {
            is_displayed: false,
        }
    }

    render () {
        const contacts = this.props.contacts[0];

        return (
            <div className="contactList">
                <h3 className="Contact_name">{contacts.name}</h3>
                <div className="locationData">
                    <span className="location">{contacts.city}, </span>
                    <span className="location">{contacts.state}</span>
                    <span className="location"> {contacts.zip_code}</span>
                </div>
                <div className={`remaining_details ${is_displayed ? 'is_displayed' : ''} `}></div>
            </div>
        )
    }
}