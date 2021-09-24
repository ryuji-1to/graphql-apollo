import { gql } from '@apollo/client';

export const GET_ALL_TODOS = gql`
  query {
    todos {
      id
      text
      isDone
      createdAt
    }
  }
`;

export const TODOS_SUBSCRIPTION = gql`
  subscription OnTodoAdded {
    todoAdded {
      id
      text
      isDone
      createdAt
    }
  }
`;
