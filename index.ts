import axios from 'axios'

const url = 'https://jsonplaceholder.typicode.com/todos/1';

// created based on JSON file
interface Todo {
  id: number;
  title: string;
  completed: boolean;
};

axios.get( url )

axios.get( url ).then( response => {
  const todo = response.data as Todo;

  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;

  console.log( `
    The Todo with ID: ${id}
    Has a title of: ${title}
    Is it finished? ${completed}
  `);
} );