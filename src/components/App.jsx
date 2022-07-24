import React, { Component } from 'react';
// import TodoList from './ToDoList/ToDoList';
import initialTodos from '../todos.json';



class App extends Component {
  state = {
    todos: initialTodos,
    name: '',
    tag: '',
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value });
  };


  render() {
    // const { todos } = this.state;

    // const totalTodoCount = todos.length;
    // const completedTodoCount = todos.reduce(
    //   (total, todo) => (todo.completed ? total + 1 : total),
    //   0,
    // );

    return (
      <>
        <form>
          <label>
            Имя <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange} />
          </label>
          <label>
            Прозвище
            <input
              type="text"
              name="tag"
              value={this.state.tag}
              onChange={this.handleChange} />
          </label>
        </form>

        {/* <Counter initialValue={10} /> */}
        

        {/* <div> */}
          {/* <p>Общее кол-во: {totalTodoCount}</p>
          <p>Кол-во выполненных: {completedTodoCount}</p> */}
        {/* </div> */}

        {/* <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />
       */}
        </>
    );
  }
}

export default App;