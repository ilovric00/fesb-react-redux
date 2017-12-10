import React, { Component } from 'react';

class AddForm extends Component {
  state = {
    username: ''
  }

  handleSubmit = (event) => {
    event.preventDefault();
    fetch(`https://api.github.com/users/${this.state.username}`)
      .then(response => response.json())
      .then(data => {
        this.props.onSubmit(data);
        this.setState({ username: '' });        
      });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          value={this.state.username}
          onChange={(event) => this.setState({ username: event.target.value })}
          type="text"
          placeholder="GitHub username..."
          required 
        />
        <button type="submit">Add card</button>
      </form>
    );
  }
}
export default AddForm;
