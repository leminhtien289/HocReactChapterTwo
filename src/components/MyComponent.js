// class component
// functional component

import React from 'react';
import UserInfor from './UserInfor';
import DisplayInfor from './DisplayInfor';

class MyComponent extends React.Component {
    state = {
        listUsers: [
            { id: 1, name: 'Nahihi', age: 21 },
            { id: 2, name: 'Nahida', age: 23 },
            { id: 3, name: 'Nahihe', age: 27 }
        ]
    }
    //JSX
    render() {

        //DRY: Don't Repeat Yourself

        return (
            <div>
                <UserInfor />
                <br></br>
                <br></br>
                <DisplayInfor listUsers={this.state.listUsers} />
       

            </div >
        )
    }
}

export default MyComponent;