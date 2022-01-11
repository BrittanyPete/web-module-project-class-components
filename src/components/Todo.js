import React from 'react';

class Todo extends React.Component {
    constructor() {
        super();
        this.state = {
            input: ''
        }
    }
    
    handleClick = () => {
        // console.log('handleClick:')
        // this.props.handleToggleTodo(props.item);
    }

    render() {
        // console.log('todo props:', this.props)
        return (
            <div onClick={this.handleClick} className={`item${this.props.item.completed ? ' completed' : ''}`}>
                <p>{this.props.item.item}</p>
            </div>
        )
    }
}



export default Todo;