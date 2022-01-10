import React from 'react';
import TodoList from './components/TodoList.js';
import TodoForm from './components/TodoForm.js';

const toDoList = [
  {
    item: 'clean desk',
    id: 123,
    completed: false
  },
  {
    item: 'file paperwork',
    id: 124,
    completed: false
  }
]

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      toDo: toDoList
    };
  }

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  //need - a form for list, to do item list, button to clear.

  //Clear Finished
  handleClearFinished = () => {
    this.setState({
      ...this.state,
      list: this.state.toDoList.filter(item => {
        return !item.purchased;
      })
    });
  }

  //Add to do item

  //Toggle finished items

  render() {
    return (
      <div>
        <div>
          <h1>To Do List:</h1>
          <TodoForm />
        </div>
        <TodoList />
        <button onClick={this.handleClearFinished} className='clear-btn'>Clear Finished</button>
      </div>
    );
  }
}

export default App;
