import React from 'react';
import { connect } from 'react-redux';

const CommentList = (props) => {
  const renderList = props.comments.map((comment, index) => {
    return <li key={index}>{comment}</li>;
  });
  return(
    <ul className="comment-list">
      {renderList}
    </ul>
  );
}

function mapStateToProps(state) {
  return { comments: state.comments };
}

export default connect(mapStateToProps)(CommentList);
