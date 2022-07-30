import React, { Component } from 'react';
import shortid from 'shortid';

import TodoList from './ToDoList/ToDoList';
import initialTodos from '../todos.json';
import TodoEditor from './TodoEditor/TodoEditor';
import Filter from './ToDoList/Filter';
// import Form from './Form';



class App extends Component {
  state = {
    todos: initialTodos,
    filter: '',
  };

  addToDo = text => {
    console.log(text);

    const todo = {
      id: shortid.generate(),
      text,
      completed: false,
    };

    this.setState(({todos}) => ({
      todos: [todo, ...todos],
    }))
  };

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

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };


  // formSubmitHandler = data => {
  //   setTimeout(() => {
  //     console.log(data);
  //   }, 1000);
    
  // };

  render() {
    const { todos, filter } = this.state;

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
        
        <TodoEditor onSubmit={this.addToDo} />
        <Filter value={filter} onChange={this.changeFilter}/>
        
        <TodoList todos={todos}
          onDeleteTodo={this.deleteTodo}
          onToggleCompleted={this.toggleCompleted} />
      
      </>
    );
  }
}

export default App;