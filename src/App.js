import React from 'react';
import './App.css';
import ContactList from '.components/ContactList'
import ContactForm from './components/ContactForm'

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      contacts: [
        {
          name: 'John Doe',
          email: 'jd@email.com',
          phone_number: '123-4567',
          address: '122 Second Street',
          city: 'Jacksonville',
          state: 'FL',
          zip_code: '32211',
        },
      ],
    };
  }


  addNewContact = (newContact) => {
    this.setState({
      contacts: [
        ...this.state.contacts,
        {
          name: newContact.name,
          email: newContact.email,
          phone_number: newContact.phone_number,
          address: newContact.address,
          city: newContact.city,
          state: newContact.state,
          zip_code: newContact.zip_code,

        },
      ],
    });
  }


  render() {
    return (
      <div className="App">
        <div className="contact-form">
          <ContactForm
            onNewContact={this.state.addNewContact}
          />
          <ContactList
            contact={this.state.contacts}
          />
        </div>
      </div>
    );
  }
}

export default App;
