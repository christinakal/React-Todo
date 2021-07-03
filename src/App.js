import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm.js';
import TodoList from './components/TodoComponents/TodoList.js';

const todos = [
  {
    task: 'Clean office',
    id: 1,
    completed: false
  },
  {
    task: 'Walk the dog',
    id: 2,
    completed: false
  }, 
  {
    task: 'Work meeting',
    id: 3,
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
      todoList: todos
    };
  }

  toggleTodo = id => {
    const newTodoList = this.state.todoList.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed
        };
      } else {
        return todo;
      }
    });
    this.setState({
      todoList: newTodoList
    }); 
  };
  

  addTodo = todoName => {
    const newTodo = {
      name: todoName,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todoList: [...this.state.todoList, newTodo]
    });
  };

  clearCompleted = e => {
    e.preventDefault();
    const todos = this.state.todoList.filter(todo => {
        return todo.completed === false;
      } 
    );
    console.log(todos);
    this.setState({
      todoList: todos
    });
  }

  render() {
    return (
      <div>
        <h1>This is a Todo App</h1>
        {/* <h2>{this.state.task}</h2> */}
        <div>
          <TodoForm addTodo={this.addTodo} clearCompleted={this.clearCompleted}/>
        </div>
          <TodoList todos={this.state.todoList} toggleTodo={this.toggleTodo}/>
      </div>
    );
  }
}

export default App;
