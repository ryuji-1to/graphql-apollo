import { useQuery } from '@apollo/client';
import { GET_ALL_TODOS } from './graphql/query';
import { Todo } from './Todo';

export const Todos = () => {
  const { loading, error, data } = useQuery(GET_ALL_TODOS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;
  return (
    <ul>
      {data.todos.map((d) => (
        <Todo key={d.id} data={d} />
      ))}
    </ul>
  );
};
