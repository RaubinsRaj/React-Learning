 import React from "react";

 class UserClass extends React.Component {
    constructor (props){
        super(props);
        console.log(props);
        this.state = {
            count:0,
            IncrementByTwo:0
        }
        this.handleClick=this.handleClick.bind(this);
        this.handleIncrementByTwo=this.handleIncrementByTwo.bind(this);
    }

   handleClick() {
    this.setState({
        count:this.state.count+1,
        IncrementByTwo:this.state.IncrementByTwo+3
    });
    }
handleIncrementByTwo(){
    this.setState({
        IncrementByTwo:this.state.IncrementByTwo+2
    })
    }

    render(){
        const {name,location}= this.props;
        return (
                <div className="user-card">
                    <h1>{this.state.count}</h1>
                    <h1>{this.state.IncrementByTwo}</h1>
                    <button onClick={this.handleClick} >click</button>
                    <button onClick={this.handleIncrementByTwo} >Increment</button>
                    <h4>Name: {this.props.name}</h4>
                    <h4>Name: {name}</h4>
                    <h4>Location: {this.props.location}</h4>
                    <h2>Contact: @83938086</h2>
                </div>
        )
    }
} 

export default UserClass;