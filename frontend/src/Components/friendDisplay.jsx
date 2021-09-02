import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import ReactTooltip from "react-tooltip";

class FriendDisplay extends Component {
  render() {
    const { user } = this.props;
    return (
      <span>
        <Button
          className="btn-friend"
          variant="outline-dark"
          size="lg"
          data-tip={user.email}
        >
          <i className="fa fa-user-circle fa-fw"></i>
          {" " + user.first_name + " " + user.last_name}
        </Button>
        <ReactTooltip place="right" type="info" html={true} />
      </span>
    );
  }
}

export default FriendDisplay;