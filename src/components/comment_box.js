import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class CommentBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: ''
    };
  }
  handleInput(event) {
    this.setState({comment: event.target.value});
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.saveComment(this.state.comment);
    this.setState({comment: ''});
  }
  render() {
    return(
      <form
        className='comment-box form-group' onSubmit={this.handleSubmit.bind(this)} >
        <textarea className='form-control' onChange={this.handleInput.bind(this)} value={this.state.comment}/>
        <button className='form-control btn btn-primary' action='submit' >Submit Comment</button>
      </form>
    );
  }
}

export default connect( null, actions )(CommentBox);
