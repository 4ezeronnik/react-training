import React, { Component } from "react";
import styles from './TodoEditor.module.css'

class TodoEditor extends Component {
    state = {
        message: ''
    }

    handleChange = e => { 
        this.setState({message: e.currentTarget.value})
    };

    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state);

        this.props.onSubmit(this.state.message);

        this.setState({ message: '' });
    };
    render() {
        return (
            <form className={styles.toDoEditor} onSubmit={this.handleSubmit}>
                <textarea value={this.state.message} onChange={this.handleChange}></textarea>
                <button type="submit" className="TodoEditor__button">Сохранить</button>
            </form>
        )
    };
}

export default TodoEditor;
