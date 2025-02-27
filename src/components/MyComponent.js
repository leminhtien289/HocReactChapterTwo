// class component
// functional component

import React from 'react';
import AddUserInfor from './AddUserInfor';
import DisplayInfor from './DisplayInfor';

class MyComponent extends React.Component {
    state = {
        listUsers: [
            { id: 1, name: 'Nahihi', age: '10' },
            { id: 2, name: 'Nahida', age: '15' },
            { id: 3, name: 'Nahihe', age: '27' }
        ]
    }

    handleAddNewUser = (userObj) => {
        // let listUserNew = this.state.listUsers;

        // listUserNew.unshift(userObj);
        // this.setState({
        //     listUsers: listUserNew
        // })

        this.setState({
            listUsers: [userObj, ...this.state.listUsers]
        });
    };

    handleDeleteUser = (userId) => {
        let listUsersClone = this.state.listUsers;
        listUsersClone = listUsersClone.filter(item => item.id !== userId)
        this.setState({
            listUsers: listUsersClone
        })
    }

    //JSX
    render() {

        //DRY: Don't Repeat Yourself

        return (
            <>
                <br></br>
                <div className='a'>
                    <AddUserInfor
                        handleAddNewUser={this.handleAddNewUser} />
                    <br></br>

                    <br></br>
                    <DisplayInfor
                        listUsers={this.state.listUsers}
                        handleDeleteUser={this.handleDeleteUser}
                    />
                </div>
                <div className='b'>

                </div>

            </>
        )
    }
}

export default MyComponent;