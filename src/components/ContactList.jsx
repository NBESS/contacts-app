import React, { Component } from 'react';

export default class ContactList extends Component {
    render () {
        const contacts = this.props.contacts[0];

        return (
            <div className="contactList">
                <h2>Contact List</h2>
                <h3 className="contactName">{contacts.name}</h3>
                <div className="locationData">
                    <span className="location">{contacts.city}, </span>
                    <span className="location">{contacts.state}</span>
                    <span className="location"> {contacts.zip_code}</span>
                </div>
            </div>
        )
    }
}