import React, { Component } from "react";
import styles from './TodoEditor.module.css'

class TodoEditor extends Component {
    state = {
        message: ''
    }

    handleChange = e => { };

    render() {
        return (
            <form className={styles.toDoEditor}>
                <textarea value={this.state.message} onChange={this.handleChange}></textarea>
                <button type="button" className="TodoEditor__button">Сохранить</button>
            </form>
        )
    };
}

export default TodoEditor;
