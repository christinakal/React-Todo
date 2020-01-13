import React from 'react';

class TodoForm extends React.Component {
    constructor(){
        super();
        this.state = {
            todoText: ""
        };
    }
    render(){
        return (
            <form>
                <input placeholder="Add a todo" />
                <button>Add a todo</button>
                <button>Clear completed</button>
            </form>
        )
    }    
}
export default TodoForm;