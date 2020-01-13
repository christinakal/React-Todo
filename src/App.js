import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm.js';
import TodoList from './components/TodoComponents/TodoList.js';

const todos = [
  {
    task: 'Clean office',
      id: Date.now(),
      completed: false
  },
  {
    task: 'Walk the dog',
    id: Date.now(),
    completed: false
  }, 
  {
    task: 'Work meeting',
    id: Date.now(),
    completed: false
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: todos
    };
  }
  render() {
    return (
      <div>
        <h1>This is a Todo App</h1>
        <h2>{this.state.task}</h2>
        <TodoList todos={this.state.todos}/>
        <TodoForm />
      </div>
    );
  }
}

export default App;
