import React from 'react'
import logoApp from '../img/Calculator.png';
import '../css/CalcLogo.css';

function CalcLogo() {
    return (
        <div className="contenedor">
            <h1><img src={logoApp} className="logo" alt='Logo' /> React Calc</h1>
        </div>
    );
}

export default CalcLogo;