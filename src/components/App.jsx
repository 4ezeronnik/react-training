import React, { Component } from 'react';
import shortid from 'shortid';

import TodoList from './ToDoList/ToDoList';
// import initialTodos from '../todos.json';
import TodoEditor from './TodoEditor/TodoEditor';
import Filter from './ToDoList/Filter';
// import Form from './Form';
import Modal from './Modal/Modal'
import Clock from './Clock/Clock'



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

    if (this.state.todos !== prevState.todos) {
  

      localStorage.setItem('todos', JSON.stringify(this.state.todos))
      
    }

  }

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
        <button type="button" onClick={this.toggleModal}>Open modal</button>
        {showModal && (
          <Modal onClose={this.toggleModal}>
          <h1>Hello, this is content of modal as a children</h1>
          <p> Lamarr was taking acting classes in Vienna when one day,
            she forged a note from her mother and went to Sascha-Film and was able to get herself hired as a script girl.
            While there, she was able to get a role as an extra in Money on the Street (1930),
            and then a small speaking part in Storm in a Water Glass (1931).
            Producer Max Reinhardt then cast her in a play entitled The Weaker Sex, which was performed at the Theater in der Josefstadt.
            Reinhardt was so impressed with her that he brought her with him back to Berlin.
            However, she never actually trained with Reinhardt or appeared in any of his Berlin productions.
            Instead, she met the Russian theatre producer Alexis Granowsky, who cast her in his film directorial debut,
            The Trunks of Mr. O.F. (1931), starring Walter Abel and Peter Lorre. Granowsky soon moved to Paris,
            but Lamarr stayed in Berlin and was given the lead role in No Money Needed (1932), a comedy directed by Carl Boese.
            Lamarr then starred in the film which made her internationally famous.
          </p>
          <button type="button" onClick={this.toggleModal}>Close</button>
        </Modal> )}

        {/* <Counter initialValue={10} /> */}
        

        {/* <div>
          <p>Общее кол-во: {totalTodoCount}</p>
          <p>Кол-во выполненных: {completedTodoCount}</p>
        </div>
        
        <TodoEditor onSubmit={this.addToDo} />
        <Filter value={filter} onChange={this.changeFilter}/>
        
        <TodoList todos={visibleTodos}
          onDeleteTodo={this.deleteTodo}
          onToggleCompleted={this.toggleCompleted} /> */}
      
      </>
    );
  }
}

export default App;