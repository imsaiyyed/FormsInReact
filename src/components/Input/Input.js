import React from 'react';

let Input =(props)=>{
    let jsxSource;
    switch(props.elementType)
    {
        case 'input':
            jsxSource=(
            <div>
                <label>{props.elementConfig.placeholder}</label><br/>
                <input type='input' {...props.elementConfig} 
                value={props.value} 
                onChange={props.changed}/>
            </div>);
        break;
        case 'select':
            jsxSource=(
                <div>
                    <label>{props.elementConfig.placeholder}</label><br/>
                    <select onChange={props.changed}>
                        {props.elementConfig.options.map(opt=>
                            (<option key={opt.value} value={opt.value}>{opt.displayValue}</option>)
                            )}
                    </select> 
                </div>
            )
        break;
        default:
            jsxSource=(<input type='input' placeholder={props.placeholder}/>);
        break;
       
    }

    return(
        <div>
        {jsxSource}
        </div>
    );
}
export default Input;