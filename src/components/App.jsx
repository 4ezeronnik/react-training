import React, { Component } from 'react';
import shortid from 'shortid';

import TodoList from './ToDoList/ToDoList';
// import initialTodos from '../todos.json';
import TodoEditor from './TodoEditor/TodoEditor';
import Filter from './ToDoList/Filter';
// import Form from './Form';
import Modal from './Modal/Modal'
// import Clock from './Clock/Clock'
// import Tabs from './Tabs/Tabs';
// import tabs from '../tabs.json';
import IconButton from './IconButton/IconButton';
import { ReactComponent as AddIcon } from '../icons/add.svg';



class App extends Component {
  state = {
    todos: [],
    filter: '',
    showModal: false,
  };

    componentDidMount() {
    console.log('App componentDidMount');

    const todos = localStorage.getItem('todos');
    const parsedTodos = JSON.parse(todos);

    if (parsedTodos) {
    this.setState({ todos: parsedTodos });
 }
  }

  componentDidUpdate(prevProps, prevState) {

    const nextTodos = this.state.todos;
    const prevTodos = prevState.todos;

    if (nextTodos !== prevTodos) {
      localStorage.setItem('todos', JSON.stringify(this.state.todos))
    }
    if (nextTodos.length > prevTodos.length && prevTodos.length !== 0)
      this.toggleModal();
  }

  addToDo = text => {

    const todo = {
      id: shortid.generate(),
      text,
      completed: false,
    };

    this.setState(({ todos }) => ({
      todos: [todo, ...todos],
    }));

    // this.toggleModal();
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

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  }


  render() {
 
    const { todos, filter, showModal} = this.state;
    const totalTodoCount = todos.length;
    const completedTodoCount = this.calculateCompletedTodos();
    const visibleTodos = this.getVisibleTodos();

    return (
      <>
        {/* <Tabs items={tabs}/> */}

        <IconButton onClick={this.toggleModal} aria-label="Add todo">
          <AddIcon width="40" height="40" fill="white" />
        </IconButton>

        {/* <button type="button" onClick={this.toggleModal}>Open modal</button> */}
        {showModal && (
          <Modal onClose={this.toggleModal}>
           <TodoEditor onSubmit={this.addToDo} />
        </Modal> )}

        {/* <Counter initialValue={10} /> */}
        

        <div>
          <p>Общее кол-во: {totalTodoCount}</p>
          <p>Кол-во выполненных: {completedTodoCount}</p>
        </div>
        
        <Filter value={filter} onChange={this.changeFilter}/>
        
        <TodoList todos={visibleTodos}
          onDeleteTodo={this.deleteTodo}
          onToggleCompleted={this.toggleCompleted} />
      
      </>
    );
  }
}

export default App;