import React from 'react';
import Todo from '../Todo/Todo'
import styles from './ToDoList.module.css'

const TodoList = ({ todos, onDeleteTodo, onToggleCompleted }) => (
  <ul className="TodoList">
    {todos.map(({ id, text, completed }) => (
      <li key={id} className={styles.TodoList__item}>
        <Todo
          text={text}
          completed={completed} 
          onToggleCompleted={() => onToggleCompleted(id)}
          onDelete={() => onDeleteTodo(id)} />
      </li>
    ))}
  </ul>

);

export default TodoList;