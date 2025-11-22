import React, { Component } from "react";
import { nanoid } from "nanoid";

import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter";

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = ({ name, number }) => {
    const { contacts } = this.state;

    const isExist = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isExist) {
      alert(`${name} is already in contacts`);
      return false;
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(prev => ({
      contacts: [...prev.contacts, newContact],
    }));

    return true;
  };

  deleteContact = id => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(contact => contact.id !== id)
    }));
  };

  handleFilterChange = (fieldName, fieldValue) => {
    this.setState({
      [fieldName]: fieldValue,
    });
  };

  getFilteredContacts = () => {
    const { filter, contacts } = this.state;

    const normalized = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalized)
    );
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>

        <ContactForm onSubmit={this.addContact} />

        <h2>Contacts</h2>

        <Filter
          value={this.state.filter}
          onChange={this.handleFilterChange}
        />

        <ContactList
          contacts={this.getFilteredContacts()}
          onDelete={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
