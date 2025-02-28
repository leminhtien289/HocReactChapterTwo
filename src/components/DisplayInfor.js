import React, { useEffect, useState } from 'react';
import './DisplayInfor.scss'
// import logo from './../logo.svg';

//stateless vs statefuls

const DisplayInfor = (props) => {
    const { listUsers } = props;//object

    const [isShowHideListUser, setShowHideListUser] = useState(true);

    const handleShowHideListUser = () => {
        setShowHideListUser(!isShowHideListUser);
    };

    useEffect(() => {
        if (listUsers.length === 0) {
            alert("You deleted all")
        }
        console.log(">>> call me useEffect")
    }, [listUsers]);

    return (
        <div className='display-infor-container'>
            <div>
                <span onClick={() => handleShowHideListUser()}>
                    {isShowHideListUser === true ? "Hide list user" : "Show list user"}
                </span>
            </div>
            {isShowHideListUser &&
                <>
                    {listUsers.map((user, index) => {
                        return (
                            <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                                <div>My name's {user.name}</div>
                                <div>My age's {user.age}</div>
                                <div>
                                    <button onClick={() => { props.handleDeleteUser(user.id) }}>
                                        Delete
                                    </button>
                                </div>
                                <hr></hr>
                            </div>
                        )
                    })}
                </>
            }
        </div>
    );
};

export default DisplayInfor;
