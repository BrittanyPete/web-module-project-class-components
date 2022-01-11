import React from 'react';
import Todo from './Todo.js';

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

class TodoList extends React.Component {
    render() {
        // console.log('todoList props:', this.props);
        return(
            <div className='todo-list'>
                {this.props.toDoList.map(item => {
                   return <Todo handleToggleTodo={this.props.handleToggleTodo} key={item.id} item={item} />
                }
                )}
                
            </div>
        )
    }
}



export default TodoList;