import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class CommentBox extends Component {
  constructor(props) {
    super(props);
    this.state = { comment: ' ' };
  }

  HandleChange(event) {

      this.setState({ comment: event.target.value });
  }

  HandleSubmit(event) {
    event.preventDefault();
    this.props.saveComment(this.state.comment);
    this.setState({ comment : '' });
  }

  render() {
    return (
      <form onSubmit={this.HandleSubmit.bind(this)} className="comment-box">
        <textarea
        value={this.state.comment}
        onChange={this.HandleChange.bind(this)} />
        <button action="submit">Submit Comment</button>
      </form>
    );
  }
}

export default connect(null, actions)(CommentBox);
