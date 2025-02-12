// class component
// functional component

import React from 'react';

class MyComponent extends React.Component {

    state = {
        name: 'Nahihi',
        address: 'VN',
        age: 23
    }

    //JSX
    render() {
        return (
            <div>
                My name is {this.state.name} and I am {this.state.age} years old. I live in {this.state.address}
            </div >
        )
    }
}

export default MyComponent;