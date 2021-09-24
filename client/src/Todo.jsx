import { useMutation } from '@apollo/client';
import { DELETE_TODO_BY_ID, TOGGLE_ISDONE } from './mutation';
import { GET_ALL_TODOS } from './query';

export const Todo = ({ data }) => {
  const [toggleIsDone, { error }] = useMutation(TOGGLE_ISDONE, {
    refetchQueries: [GET_ALL_TODOS],
  });
  const [deleteTodoById, { error: err }] = useMutation(DELETE_TODO_BY_ID, {
    refetchQueries: [GET_ALL_TODOS],
  });
  const handleClick = () => {
    try {
      toggleIsDone({ variables: { id: data.id, isDone: data.isDone } });
    } catch {
      alert(error);
    }
  };

  const handleDelete = () => {
    try {
      deleteTodoById({ variables: { id: data.id } });
    } catch {
      alert(err);
    }
  };

  return (
    <li>
      <strong>{data.text}</strong>
      <button onClick={handleClick}>{data.isDone ? 'Cancel' : 'Done'}</button>
      <button onClick={handleDelete}>削除</button>
    </li>
  );
};
