import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Studio = props => (
  <tr>
    <td>{props.studio.name}</td>
    <td>{props.studio.phoneNum}</td>
    <td>{props.studio.email}</td>
    <td>{props.studio.website}</td>
    <td>{props.studio.picture}</td>
    <td>
      <Link to={"/edit/" + props.studio._id}>edit</Link> |
      <a
        href="#"
        onClick={() => {
          props.deleteStudio(props.studio._id);
        }}
      >
        delete
      </a>
    </td>
  </tr>
);

export default class StudioList extends Component {
  constructor(props) {
    super(props);

    this.deleteStudio = this.deleteStudio.bind(this);
    this.state = { studios: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/studios/")
      .then(res => {
        this.setState({ studios: res.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  deleteStudio(id) {
    axios
      .delete("http://localhost:5000/studios" + id)
      .then(res => console.log(res.data));

    this.setState({
      studios: this.state.studios.filter(el => el._id !== id)
    });
  }

  studioList() {
    return this.state.studios.map(currentstudio => {
      return (
        <Studio
          studio={currentstudio}
          deleteStudio={this.deletestudio}
          key={currentstudio._id}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <h3>Studio List</h3>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone Num</th>
              <th>Email</th>
              <th>Website</th>
              <th>Picture</th>
            </tr>
          </thead>
          <tbody>{this.studioList()}</tbody>
        </table>
      </div>
    );
  }
}
