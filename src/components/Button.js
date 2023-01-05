import React from 'react';
import '../css/Button.css';

function Button(props){

    const esOperador = (value) => {
        return isNaN(value) && value !== '.' && value !== '=';
    };

    return (
        <button
        type='button'
        className={`calc-button${esOperador(props.children) ? ' calc-button-operator' : '' }`}
        onClick={()=>props.action(props.children)}>{props.children}</button>
    );
    
}

export default Button;