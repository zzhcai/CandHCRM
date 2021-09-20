import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import AuthService from "../../Services/AuthService";
import {
  Button, Container, Row, Col, Label, Collapse, Form,
  FormGroup, Input
} from "reactstrap";
import '../../App.css'

import UserService  from "../../Services/UserService";
import OtherUser from "../otherUser";

export default class SettingNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      basic: localStorage.getItem("basic"),
      friend: null,
      redirect: false,
      noteEdit: "",
      note: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }


  async componentDidMount() {
    const { basic } = this.state;
    const friendship = await UserService.checkFriend(
      this.props.match.params.id,
      basic.token
    );

    if (!basic || !friendship){
      this.setState({ redirect: true });
    }

    this.setState ({
      friend: friendship,
      note: friendship.notes
    });
  }

  async handleSubmit(event) {
    event.preventDefault();
    const { noteEdit } = this.state;
    //alert("bruh");
    const user = AuthService.getBasicInfo();
    let res = await UserService.editFriendNote(
      this.props.match.params.id,
      user.token,
      noteEdit
    );
    //alert("bruh");
    if (res) {
      alert("Changes saved!");
      await AuthService.getUserDataFromBackend(user.token, user.id);
      window.location = "/profile/" + this.props.match.params.id;
    } else {
      alert("Something went wrong");
    }
    
  }

  handleChange(event) {
    this.setState({noteEdit: event.target.value });
  }

  handleCancel() {
    window.location = "/profile/" + this.props.match.params.id;
  }

  form () {
    const { note } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Row className="profile-display-line">
          <FormGroup className="profile-display-formgroup">
            <Input type="textarea" className="profile-display-note-input"
              placeholder={note}
              onChange={this.handleChange}
              defaultValue={note}
            >
            </Input>
          </FormGroup>
        </Row>
        <Row className="profile-display-line">
          <Col xs="4">
            <Button 
              className="profile-display-icon-btn"
              type="submit">
                Save Changes
            </Button>
          </Col>
          <Col xs="4">
            <Button
              className="profile-display-icon-btn"
              onClick={this.handleCancel}>
                Cancel
            </Button>
          </Col>
        </Row>
      </Form>
    )
  }

  render() {
    
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to={this.state.redirect} />;
    }

    return (
      <Container>
        <Row className="profile-display-bar"> 
          Edit note on this friend
        </Row>
        {this.form()}
      </Container>
    )
  }
}