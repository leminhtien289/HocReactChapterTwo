// class component
// functional component

import React from 'react';
import UserInfor from './UserInfor';
import DisplayInfor from './DisplayInfor';

class MyComponent extends React.Component {

    //JSX
    render() {
        const myInfor = ['a', 'b', 'c'];
        return (
            <div>
                <UserInfor />
                <br></br>
                <br></br>
                <DisplayInfor name="Nahihi" age="21" />
                <hr></hr>
                <DisplayInfor name="Nahihi" age={26} myInfor={myInfor} />
            </div >
        )
    }
}

export default MyComponent;