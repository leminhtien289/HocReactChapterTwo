// class component
// functional component

import React, { useState } from 'react';
import AddUserInfor from './AddUserInfor';
import DisplayInfor from './DisplayInfor';

const MyComponent = (props) => {
    const [listUsers, setListUsers] = useState([
        { id: 1, name: 'Nahihi', age: '10' },
        { id: 2, name: 'Nahida', age: '15' },
        { id: 3, name: 'Nahihe', age: '27' }
    ]
    );

    const handleAddNewUser = (userObj) => {
        setListUsers([userObj, ...listUsers]);
    };

    const handleDeleteUser = (userId) => {
        let listUsersClone = listUsers;
        listUsersClone = listUsersClone.filter(item => item.id !== userId)
        setListUsers(listUsersClone)
    }

    //JSX

    //DRY: Don't Repeat Yourself

    return (
        <>
            <br></br>
            <div className='a'>
                <AddUserInfor
                    handleAddNewUser={handleAddNewUser} />
                <br></br>

                <br></br>
                <DisplayInfor
                    listUsers={listUsers}
                    handleDeleteUser={handleDeleteUser}
                />
            </div>
            <div className='b'>

            </div>

        </>
    )
}

export default MyComponent;