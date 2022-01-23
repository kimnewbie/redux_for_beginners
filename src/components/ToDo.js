import React from 'react';
import { connect } from 'react-redux';
import { actionCreators, remove } from '../store';
import { Link } from 'react-router-dom';

const ToDo = ({ text, onClickDelete, id }) => {
  return (
    <li>
      <Link to={`/${id}`}>{text}</Link>
      <button onClick={onClickDelete}>DEL</button>
    </li>
  )
}

const mapDispatchToProps = (dispatch, ownProps) => {
  console.log(ownProps)
  return {
    // onClickDelete: () => dispatch(remove(ownProps.id))
    onClickDelete: () => dispatch(remove(ownProps.id))
  }
}

export default connect(null, mapDispatchToProps)(ToDo);