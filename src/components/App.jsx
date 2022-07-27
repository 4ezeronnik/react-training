import React, { Component } from 'react';
import TodoList from './ToDoList/ToDoList';
import initialTodos from '../todos.json';
import TodoEditor from './TodoEditor/TodoEditor';
// import Form from './Form';


class App extends Component {
  state = {
    todos: initialTodos,
  };

  addToDo = text => {
    console.log(text);
  }

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  toggleCompleted = todoId => {
    console.log(todoId);

    this.setState(prevState => ({
      todos: prevState.todos.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo,
      )
    }));
  };


  // formSubmitHandler = data => {
  //   setTimeout(() => {
  //     console.log(data);
  //   }, 1000);
    
  // };

  render() {
    const { todos } = this.state;

    const totalTodoCount = todos.length;
    const completedTodoCount = todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0,
    );

    return (
      <>

        {/* <Counter initialValue={10} /> */}
        

        <div>
          <p>Общее кол-во: {totalTodoCount}</p>
          <p>Кол-во выполненных: {completedTodoCount}</p>
        </div>
        
        <TodoEditor onSubmit={this.addToDo}/>
        
        <TodoList todos={todos}
          onDeleteTodo={this.deleteTodo}
          onToggleCompleted={this.toggleCompleted} />
      
      </>
    );
  }
}

export default App;