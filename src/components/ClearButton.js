import React from 'react';
import '../css/Button.css';

function ClearButton(props){

    return (
        <button
        type='button'
        className="calc-button calc-button-clear"
        onClick={props.action}>{props.children}</button>
    );
    
}

export default ClearButton;