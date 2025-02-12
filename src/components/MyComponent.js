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

    handleOnChangeInput = (event) => {
        this.setState({
            name: event.target.value
        });
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
    }

    //JSX
    render() {
        return (
            <div>
                My name is {this.state.name} and I am {this.state.age} years old. I live in {this.state.address}
                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <input type="text"
                        onChange={(event) => this.handleOnChangeInput(event)}
                    />
                    <button>Submit</button>
                </form>
            </div >
        )
    }
}

export default MyComponent;