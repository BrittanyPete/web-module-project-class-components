import React from 'react';

class Todo extends React.Component {
    render() {
        const handleClick = () => {
            // console.log('handleClick:', this.props)
            this.props.handleToggleTodo(this.props.item);
        }
        // console.log('todo props:', this.props)
        // console.log('todo props item:', this.props.item)
        return (
            <div onClick={handleClick} className={`item${this.props.item.completed ? ' completed' : ''}`}>
                <p>{this.props.item.item}</p>
            </div>
        )
    }
}



export default Todo;