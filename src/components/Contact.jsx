import React, { Component } from 'react';


export default class Contact extends Component {
    render() {
        const { contact } = this.props;

        return (
            <div className="contactList">
                <h2>Contact List</h2>
                <h3 className="contactName">{contact.name}</h3>
                <div className="locationData">
                    <span className="location">{contact.city}</span>
                    <span className="location">{contact.state}</span>
                    <span className="location">{contact.zip_code}</span>
                </div>
            </div>
        )
    }
}