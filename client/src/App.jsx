import './App.css';
import { useMutation } from '@apollo/client';
import { useState } from 'react';
import { ADD_TODO, DELETE_ISDONE_TODOS } from './mutation';
import { GET_ALL_TODOS } from './query';
import { Todos } from './Todos';

function App() {
  const [text, setText] = useState('');
  const [addTodo, { error }] = useMutation(ADD_TODO, {
    refetchQueries: [GET_ALL_TODOS],
  });
  const [deleteIsDoneTodos, { error: err }] = useMutation(DELETE_ISDONE_TODOS, {
    refetchQueries: [GET_ALL_TODOS],
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      addTodo({ variables: { text } });
      setText('');
    } catch {
      alert(error);
    }
  };

  const handleDelete = () => {
    try {
      deleteIsDoneTodos();
    } catch {
      alert(err);
    }
  };

  return (
    <div className="App">
      <div>
        <h1>GraphQL Todos</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="what's happening"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          <button disabled={!text.trim()}>Add</button>
          <button type="button" onClick={handleDelete}>
            完了済を削除
          </button>
        </form>
        <Todos />
      </div>
    </div>
  );
}

export default App;
