import { gql } from '@apollo/client';

export const ADD_TODO = gql`
  mutation ($text: String!) {
    addTodo(text: $text) {
      id
      text
      isDone
      createdAt
    }
  }
`;

export const TOGGLE_ISDONE = gql`
  mutation ($id: ID!, $isDone: Boolean) {
    toggleIsDone(id: $id, isDone: $isDone) {
      id
      text
      isDone
      createdAt
    }
  }
`;

export const DELETE_TODO_BY_ID = gql`
  mutation ($id: ID!) {
    deleteTodoById(id: $id) {
      id
    }
  }
`;

export const DELETE_ISDONE_TODOS = gql`
  mutation {
    deleteIsDoneTodos {
      id
    }
  }
`;
