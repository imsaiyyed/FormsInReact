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
          placeholder:'Department',
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
    },
    loginform:{
      username:{
        elementType:'input',
        elementConfig:{
					type:'text',
          placeholder:'Username'
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
    },
    isLogedIn:false
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
  logInFormChanged=(event,inputIdentifier)=>
	{
		const formCopy={...this.state.loginform}
		formCopy[inputIdentifier].value=event.target.value;

		this.setState({
			loginform:formCopy
		})

		console.log(inputIdentifier);
  }
  login=()=>{

  }
  render() {
    const formElements=[];
    const loginElements=[];

    for(let key in this.state.registerform){
      formElements.push(
        {
          id:key,
          config:this.state.registerform[key]
        }
      );
    }  
    for(let key in this.state.loginform){
      loginElements.push(
        {
          id:key,
          config:this.state.loginform[key]
        }
      );
    }
    let sourceRegister=null;
    let sourceLogin=null;

    sourceLogin=(
      <form>
					{loginElements.map(element=>(
						<Input 
							elementType={element.config.elementType} 
							elementConfig={element.config.elementConfig} 
							value={element.config.value}
							key={element.id}
							changed={(event)=>{this.logInFormChanged(event,element.id)}}/>
          ))}
          <button onClick={this.login}>LogIn</button>
        </form>
    );
    sourceRegister=(
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
          {sourceLogin}
      </div>
    );
  }
}

export default App;


