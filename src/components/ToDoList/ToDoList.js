import React from 'react';
import styles from './ToDoList.module.css'

const TodoList = ({ todos, onDeleteTodo, onToggleCompleted }) => (
  <ul className="TodoList">
    {todos.map(({ id, text, completed }) => (
      <li key={id} className={styles.TodoList__item}>
        <input
          type="checkbox"
          className={styles.TodoList__checkbox}
          checked={completed}
          onChange={() => onToggleCompleted(id)}
        />
        <p className={styles.TodoList__text}>{text}</p>
        <button
          type="button"
          className={styles.ToDoList__btn}
          onClick={() => onDeleteTodo(id)}
        >
          Удалить
        </button>
      </li>
    ))}
  </ul>

);

export default TodoList;