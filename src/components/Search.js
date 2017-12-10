import React, { Component } from 'react';

class Search extends Component {
  handleChange = (event) => {
    this.props.onChange(event.target.value);
  };

  render() {
    return (
      <div className="c-sidebar__search">
        <input
          onChange={this.handleChange}
          type="text"
          placeholder="Search . . ."
          required 
        />
      </div>
    );
  }
}

export default Search;
