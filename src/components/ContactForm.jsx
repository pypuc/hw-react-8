import React, { Component } from "react";

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = (event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;

    this.setState({
      [fieldName]: fieldValue,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { name, number } = this.state;
    const isAdded = this.props.onSubmit({ name, number });

    if (isAdded) {
      this.setState({ name: "", number: "" });
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces"
            required
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>

        <label>
          Number:
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and start with +"
            required
            value={this.state.number}
            onChange={this.handleChange}
          />
        </label>

        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default ContactForm;
