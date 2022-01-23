import React, { useState } from 'react';
import { connect } from 'react-redux';
import { actionCreators, add } from '../store';
import ToDo from '../components/ToDo';

const Home = ({ toDos, addToDo }) => {
  const [text, setText] = useState('');
  const onChangeToDo = (e) => {
    setText(e.target.value)
  }
  const onSubmitToDo = (e) => {
    e.preventDefault();
    setText('');
    addToDo(text);
  }
  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmitToDo}>
        <input type='text' value={text} onChange={onChangeToDo} />
        <button>ADD</button>
      </form>
      <ul>
        {
          toDos.map(toDo => (
            <ToDo {...toDo} key={toDo.id} />
          ))
        }
      </ul>
    </>
  );
}

const mapStateToProps = (state) => {
  return { toDos: state };
}

const mapDisPatchToProps = (dispatch) => {
  return {
    addToDo: text => dispatch(add(text))
  }
}

export default connect(mapStateToProps, mapDisPatchToProps)(Home);