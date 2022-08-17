import React, { Component } from 'react'
import { createPortal } from 'react-dom';
import styles from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
    componentDidMount() {
        console.log('Modal componentDidMount');

        window.addEventListener('keydown', this.handleKeyDown);
    }

    componentWillUnmount() {
        console.log('Modal componentWillUnmount');

        window.removeEventListener('keydown', this.handleKeyDown)
    }

    handleKeyDown = e => {
         if (e.code === 'Escape') {
                console.log('Pressed ESC, need to close the modal');
                
                this.props.onClose();
            }
    }

    render() {
        return createPortal(<div className={styles.modalBackdrop}>
                <div className={styles.modalContent}>{this.props.children}</div>
        </div>,
        modalRoot);
    }
}
