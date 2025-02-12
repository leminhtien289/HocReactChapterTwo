// class component
// functional component

import React from 'react';

class MyComponent extends React.Component {

    state = {
        name: 'Nahihi',
        address: 'VN',
        age: 23
    }

    handleClick = (event) => {
        console.log('Button clicked!');

        this.setState({
            name: 'LMT',
            age: Math.floor(Math.random() * 100 + 1)
        });
    }

    handleOnMouseOver = (event) => {
        // console.log(event.pageX);

    }
    //JSX
    render() {
        return (
            <div>
                My name is {this.state.name} and I am {this.state.age} years old. I live in {this.state.address}
                <button onMouseOver={(event) => { this.handleOnMouseOver(event) }}>Hover me!</button>
                <button onClick={(event) => { this.handleClick(event) }}>Click me!</button>
            </div >
        )
    }
}

export default MyComponent;