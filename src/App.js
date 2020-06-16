import React from 'react';
import './App.css';
import ContactForm from './components/ContactForm'
import ContactList from './components/ContactList'

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      contacts: [
        {
          name: 'John Doe',
          email: 'jd@email.com',
          phone_number: '123-1234',
          address: '123 2nd Street',
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
      <div>
        <ContactForm
            onNewContact={this.state.addNewContact}
        />
        <ContactList 
          contacts={this.state.contacts}
        />
      </div>
    );
  }
}

export default App;
