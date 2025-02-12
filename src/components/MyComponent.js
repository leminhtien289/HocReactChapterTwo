// class component
// functional component

import React from 'react';

class MyComponent extends React.Component {

    state = {
        name: 'Nahihi',
        address: 'VN',
        age: 23
    }

    handleClick(event) {
        console.log('Button clicked!');
        console.log("My name is ", this.state.name);
    }

    handleOnMouseOver(event) {
        console.log(event.pageX);
    }
    //JSX
    render() {
        return (
            <div>
                My name is {this.state.name} and I am {this.state.age} years old. I live in {this.state.address}
                <button onMouseOver={this.handleOnMouseOver}>Hover me!</button>
                <button onClick={this.handleClick}>Click me!</button>
            </div >
        )
    }
}

export default MyComponent;