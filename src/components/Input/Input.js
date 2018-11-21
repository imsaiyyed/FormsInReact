import React from 'react';

let Input =(props)=>{
    let jsxSource;
    switch(props.elementType)
    {
        case 'input':
            jsxSource=(<input type='input' {...props.elementConfig} value={props.value} onChange={props.changed}/>);
        break;
        case 'select':
            jsxSource=(
                <select onChange={props.changed}>
                    {props.elementConfig.options.map(opt=>
                        (<option key={opt.value} value={opt.value}>{opt.displayValue}</option>)
                        )}
                </select> 
                
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