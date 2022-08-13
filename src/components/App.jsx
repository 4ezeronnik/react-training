import React, { Component } from 'react';
import shortid from 'shortid';

import TodoList from './ToDoList/ToDoList';
// import initialTodos from '../todos.json';
import TodoEditor from './TodoEditor/TodoEditor';
import Filter from './ToDoList/Filter';
// import Form from './Form';



class App extends Component {
  state = {
    todos: [],
    filter: '',
  };

  addToDo = text => {

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

    this.setState(prevState => ({
      todos: prevState.todos.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo,
      )
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleTodos = () => {
    const { filter, todos } = this.state;
    const normalizedFilter = filter.toLocaleLowerCase();
    return todos.filter(todo =>
      todo.text.toLowerCase().includes(normalizedFilter));
  };

  calculateCompletedTodos = () => {
    const { todos } = this.state;

   return todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0,
    );
  }

  componentDidMount() {
    console.log('App componentDidMount');

    const todos = localStorage.getItem('todos');
    const parsedTodos = JSON.parse(todos);

    if (parsedTodos) {
    this.setState({ todos: parsedTodos });
 }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('App componentDidUpdate');

    if (this.state.todos !== prevState.todos) {
      console.log('Обновилось поле todos');

      localStorage.setItem('todos', JSON.stringify(this.state.todos))
      
    }

  }

  render() {
    console.log('App render');
    const { todos, filter } = this.state;
    const totalTodoCount = todos.length;
    const completedTodoCount = this.calculateCompletedTodos();
    const visibleTodos = this.getVisibleTodos();

    return (
      <>

        {/* <Counter initialValue={10} /> */}
        

        <div>
          <p>Общее кол-во: {totalTodoCount}</p>
          <p>Кол-во выполненных: {completedTodoCount}</p>
        </div>
        
        <TodoEditor onSubmit={this.addToDo} />
        <Filter value={filter} onChange={this.changeFilter}/>
        
        <TodoList todos={visibleTodos}
          onDeleteTodo={this.deleteTodo}
          onToggleCompleted={this.toggleCompleted} />
      
      </>
    );
  }
}

export default App;