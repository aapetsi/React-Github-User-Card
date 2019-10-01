import React, { Component } from "react";
import axios from "axios";
import CardList from "./components/CardList";
import Search from "./components/Search";
import "./App.css";

class App extends Component {
  state = {
    account: "aapetsi",
    user: [],
    followers: []
  };

  updateUserSearch = username => {
    this.setState({ account: username });
  };

  fetchUserAndFollowers = () => {
    const api = `https://api.github.com/users/${this.state.account}`;
    axios
      .get(api)
      .then(res => {
        let user = res.data;
        this.setState({ user });

        axios
          .get(`https://api.github.com/users/${this.state.account}/followers`)
          .then(res => {
            this.setState({ followers: [...res.data] });
          });
      })
      .catch(err => {
        console.log(err.response);
      });
  };

  componentDidMount() {
    this.fetchUserAndFollowers();
  }

  componentDidUpdate() {
    this.fetchUserAndFollowers();
  }

  render() {
    return (
      <div className="App">
        <h1>Welcome to my app</h1>
        <Search updateUserSearch={this.updateUserSearch} />
        <CardList followers={this.state.followers} user={this.state.user} />
      </div>
    );
  }
}

export default App;
