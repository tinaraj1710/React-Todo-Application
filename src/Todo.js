import React, { Component } from "react";
import "./Todo.css";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      task: this.props.task
    };
  }


  handleRemove = () => {
    this.props.removeTodo(this.props.id);
  }


  toggleForm = () => {
    this.setState({ isEditing: !this.state.isEditing });
  }


  handleUpdate = (evt) => {
      evt.preventDefault();
      this.props.updateTodo(this.props.id, this.state.task);
      this.setState({ isEditing: false });
  }


  handleChange = (evt) => {
      this.setState({
        [evt.target.name]: evt.target.value
      });
  }


  handleToggle = (evt) => {
    this.props.toggleTodo(this.props.id);
  }


  render() {
    let result;
    if (this.state.isEditing) {
      result = (
          <form className='Todo-edit-form' onSubmit={this.handleUpdate}>
            <input
              type='text'
              value={this.state.task}
              name='task'
              onChange={this.handleChange}
            />
            <button>Save</button>
          </form>
      );
    } else {
      result = (
          <li className='Todo-task' onClick={this.handleToggle}>
            {this.props.task}
          </li>
      );
    }


    return (
      <div className={this.props.completed ? "Todo completed" : "Todo"}>
        {result}
        <div className='Todo-buttons'>
          <button onClick={this.toggleForm}>
            <i class='fas fa-pen' />
          </button>
          <button onClick={this.handleRemove}>
            <i class='fas fa-trash' />
          </button>
        </div>
      </div>
     
    );
  }
}


export default Todo;
