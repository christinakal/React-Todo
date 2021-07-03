import React from 'react';

class TodoForm extends React.Component {
    constructor(){
        super();
        this.state = {
            todoText: ""
        };
    }
 
    handleChanges = e => {
        // update state with each keystroke
        this.setState({
            todoText: e.target.value,
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.addTodo(this.state.todoText);
    };

    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input placeholder="Add a todo" type="input" name="text" value={this.state.todoText} onChange={this.handleChanges}/>
                    <button>Add a todo</button>
                </form>
                <button onClick={this.props.clearCompleted}>Clear Completed</button>
            </div>
        )
    }    
}
export default TodoForm;