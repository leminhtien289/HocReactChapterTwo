import React from 'react';
import './DisplayInfor.scss'
import logo from './../logo.svg';

class DisplayInfor extends React.Component {
    state = {
        isShowListUser: true,
    }

    handleShowHide = () => {
        this.setState({
            isShowListUser: !this.state.isShowListUser,
        });
    };
    render() {
        //props: properties  
        // destructuring array/object
        const { listUsers } = this.props;//object

        // console.log(listUsers);
        // console.table(listUsers);

        return (
            <div className='display-infor-container'>
                <img src={logo} />
                <div>
                    <span onClick={() => { this.handleShowHide() }}>
                        {this.state.isShowListUser === true ? "Hide list user:" : "Show list user:"}
                    </span>
                </div>
                {this.state.isShowListUser &&
                    <>
                        {listUsers.map((user) => {

                            return (
                                <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                                    <div>My name's {user.name}</div>
                                    <div>My age's {user.age}</div>
                                    <hr></hr>
                                </div>
                            )


                        })}

                    </>
                }
            </div>
        );
    }
}
export default DisplayInfor;
