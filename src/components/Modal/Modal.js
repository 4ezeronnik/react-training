import React, {Component} from 'react'
import styles from './Modal.module.css';

export default class Modal extends Component {
    componentDidMount() {
        console.log('Modal componentDidMount');
    }

    componentWillUnmount() {
        console.log('Modal componentWillUnmount');
    }

    render() {
        return (
            <div className='styles.Modal__backdrop'>
                <div className="Modal__content">{this.props.children}</div>
            </div>
        )
    }
}