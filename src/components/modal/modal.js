import React, {forwardRef, useCallback, useEffect, useImperativeHandle, useState} from 'react'
import {createPortal} from 'react-dom';
import './modal.css';
import {ReactComponent as CloseIcon} from './../../images/close.svg';

const modalElement = document.getElementById('modal-root');

export function Modal({children, fade = false, defaultOpened = false}, ref) {
    const [isOpen, setIsOpen] = useState(defaultOpened);

    const close = useCallback(() => setIsOpen(false), []);

    useImperativeHandle(ref, () => ({
        open: () => setIsOpen(true),
        close: () => setIsOpen(false)
    }), []);

    const handleEscape = useCallback(event => {
        if (event.keyCode === 27) setIsOpen(false)
    }, []);

    useEffect(() => {
        if (isOpen) document.addEventListener('keydown', handleEscape, false);
        return () => {
            document.removeEventListener('keydown', handleEscape, false)
        }
    }, [handleEscape, isOpen]);

    return createPortal(
        isOpen ? (
            <div className={`modal ${fade ? 'modal-fade' : ''}`}>
                <div className="modal-overlay" onClick={close}/>
                <span role="button" className="modal-close" aria-label="close" onClick={close}>
                    <CloseIcon/>
                </span>
                <div className="modal-body jumbotron">{children}</div>
            </div>
        ) : null,
        modalElement
    )
}

export default forwardRef(Modal);