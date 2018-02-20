import React, { Component } from 'react';
import '../css/todo.css';

class Todo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="todo-container">
      <p>
        <label for="new-task">Add Item</label><input id="new-task" type="text"></input><button>Add</button>
      </p>

      <h3>Todo</h3>
      <ul id="incomplete-tasks">
        <li><input type="checkbox"></input><label>Pay Bills</label><input type="text"></input><button className="edit">Edit</button><button className="delete">Delete</button></li>
        <li className="editMode"><input type="checkbox"></input><label>Go Shopping</label><input type="text" value="Go Shopping"></input><button className="edit">Edit</button><button className="delete">Delete</button></li>

      </ul>

      <h3>Completed</h3>
      <ul id="completed-tasks">
        <li><input type="checkbox" checked></input><label>See the Doctor</label><input type="text"></input><button className="edit">Edit</button><button className="delete">Delete</button></li>
      </ul>
    </div>
    )
  }
}



export default Todo;
