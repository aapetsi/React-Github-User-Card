import React, { Component } from "react";

class Search extends Component {
  state = {
    username: ""
  };

  handleChange = e => {
    this.setState({ username: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.updateUserSearch(this.state.username);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            name="username"
            value={this.state.username}
            type="text"
            onChange={this.handleChange}
          />
          <button>Search</button>
        </form>
      </div>
    );
  }
}

export default Search;
