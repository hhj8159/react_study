import React, { Component } from 'react';

const styles = {
  wrapper : {
    margin : 8,
    padding : 8,
    display : "flex",
    flexDirection : "row",
    border : "1px solid grey",
    borderRadius : 16,
  },
  messageText : {
    color : "balck",
    fontSize : 16,
  },
}

class Notification extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div style={styles.wrapper}>
        <span style={styles.messageText}>
          {this.props.message}
        </span>
      </div>
    );
  }
}

export default Notification;
