import React from "react";

class LoginComponent extends React.Component {
    componentDidMount(){
        alert("Login Component Requested");
    }
    componentWillUnmount(){
        alert("Login Component will Unmount");
    }
    render(){
        return(
            <div>Login</div>
        )
    }
}

class RegisterComponent extends React.Component {
    componentDidMount(){
        alert("Register Component Requested");
    }
    componentWillUnmount(){
        alert("Register Component will Unmount")
    }
    render(){
        return(
            <div>Register</div>
        )
    }
}


export class LifeCycleComponet extends React.Component {

    constructor(){
        super();
        this.state={
            component:""
        }

        this.handelLoginClick=this.handelLoginClick.bind(this);
        this.handelRegisterClick=this.handelRegisterClick.bind(this);


    }
    handelLoginClick(){
        this.setState({
            component:<LoginComponent/>
        })
    }
    handelRegisterClick(){
        this.setState({
            component:<RegisterComponent/>
        })
    }

    render(){
        return(
            <div className="container">
                <h2>Life Cycle hooks</h2>

                <div>
                <button onClick={this.handelLoginClick}>Login</button>
                <button onClick={this.handelRegisterClick}>Register</button>

                </div>
                  
                
                <hr />
                <div>
                    {this.state.component}
                </div>

            </div>
        )
    }

}