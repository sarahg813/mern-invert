import React, { Component } from "react";
import axios from "axios";

export default class CreateStudio extends Component {
  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangePhoneNum = this.onChangePhoneNum.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeWebsite = this.onChangeWebsite.bind(this);
    this.onChangePicture = this.onChangePicture.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: "",
      phoneNum: "",
      email: "",
      website: "",
      picture: ""
    };
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }

  onChangePhoneNum(e) {
    this.setState({
      phoneNum: e.target.value
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  onChangeWebsite(e) {
    this.setState({
      website: e.target.value
    });
  }

  onChangePicture(e) {
    this.setState({
      picture: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const studio = {
      name: this.state.name,
      phoneNum: this.state.phoneNum,
      email: this.state.email,
      website: this.state.website,
      picture: this.state.picture
    };

    console.log(studio);

    axios
      .post("http://localhost:5000/studios/add", studio)
      .then(res => console.log(res.data));

    this.setState({
      name: "",
      phoneNum: "",
      email: "",
      website: "",
      picture: ""
    });
  }

  render() {
    return (
      <div>
        <h3>Create New Studio</h3>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Name: </label>
            <input
              type="text"
              required
              value={this.state.Name}
              onChange={this.onChangeName}
            />
          </div>
          <div>
            <label>PhoneNum: </label>
            <input
              type="text"
              required
              value={this.state.phoneNum}
              onChange={this.onChangePhoneNum}
            />
          </div>
          <div>
            <label>Email: </label>
            <input
              type="text"
              required
              value={this.state.email}
              onChange={this.onChangeEmail}
            />
          </div>
          <div>
            <label>Website: </label>
            <input
              type="text"
              required
              value={this.state.website}
              onChange={this.onChangeWebsite}
            />
          </div>
          <div>
            <label>Picture: </label>
            <input
              type="text"
              required
              value={this.state.picture}
              onChange={this.onChangePicture}
            />
          </div>
          <div>
            <input type="submit" value="Create Studio" />
          </div>
        </form>
      </div>
    );
  }
}
