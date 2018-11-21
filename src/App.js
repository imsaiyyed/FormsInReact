import React, { Component } from 'react';
import Input from './components/Input/Input';
import './App.css';

class App extends Component {

  state={
    registerform:{
      name:{
        elementType:'input',
        elementConfig:{
          type:'text',
          placeholder:'Name'
        },
        value:''

      },
      email:{
        elementType:'input',
        elementConfig:{
          type:'email',
          placeholder:'Email'
        },
        value:''

      },
      mobile:{
        elementType:'input',
        elementConfig:{
          type:'number',
          placeholder:'Mobile'
        },
        value:''

      },
      department:{
        elementType:'select',
        elementConfig:{
					options:[
            {
              value:'SDFC',displayValue:'SalesForce'
            },
            {
              value:'MS',displayValue:'Microsoft'
            }
          ]
          
        },
        value:''

      },
      password:{
        elementType:'input',
        elementConfig:{
					type:'password',
          placeholder:'Password'
        },
        value:''
      }
    }
   
	}
	
	formChanged=(event,inputIdentifier)=>
	{
		const formCopy={...this.state.registerform}
		formCopy[inputIdentifier].value=event.target.value;

		this.setState({
			registerform:formCopy
		})

		console.log(inputIdentifier);
	}

  render() {
    const formElements=[];
    for(let key in this.state.registerform){
      formElements.push(
        {
          id:key,
          config:this.state.registerform[key]
        }
      );
    }
    let source=null;
    source=(
        <form>
					{formElements.map(element=>(
						<Input 
							elementType={element.config.elementType} 
							elementConfig={element.config.elementConfig} 
							value={element.config.value}
							key={element.id}
							changed={(event)=>{this.formChanged(event,element.id)}}/>
					))}
        </form>
    );

    return (
      <div className="App">
        {source}         
      </div>
    );
  }
}

export default App;
