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
            todoText: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.addTodo(this.state.todoText);
    };


    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <input placeholder="Add a todo" name="text" value={this.state.todoText} onChange={this.handleChanges}/>
                <button>Add a todo</button>
                {/* <button>Clear completed</button> */}
            </form>
        )
    }    
}
export default TodoForm;