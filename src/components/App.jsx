import React, { Component } from 'react';
// import TodoList from './ToDoList/ToDoList';
import initialTodos from '../todos.json';
import Form from './Form';

class App extends Component {
  state = {
    todos: initialTodos,
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  formSubmitHandler = data => {
    setTimeout(() => {
      console.log(data);
    }, 1000);
    
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
        <Form onSubmit={this.formSubmitHandler} />
       

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