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
          is_displayed: false,
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
          is_displayed: false,

        },
      ],
    });
  }

  handleDisplayToggle = (contactIndexToToggle)=> {
    const newContacts = this.state.contacts.map((contact, currentIndex) =>{
      
      if (currentIndex === contactIndexToToggle) {
        return {
          ...contact,
          is_displayed: true,
        };
      }
      return contact;
    });
      this.setState({ contacts: newContacts })
  };

  render() {
    return (
      <div>
        <ContactForm
            onNewContact={this.state.addNewContact}
        />
        <ContactList 
          contacts={this.state.contacts}
          toggleDisplayStatus={this.handleDisplayToggle}
        />
      </div>
    );
  }
}

export default App;
