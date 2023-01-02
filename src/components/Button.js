import '../css/Button.css';

function Button(props){

    const esOperador = (child) => {
        return 'calc-button-' + child;
    }

    return (
        <button className={`calc-button ${esOperador(props.children)}`} onClick={props.action}>{props.children}</button>
    );
    
}

export default Button;