import React from 'react';
import './DisplayInfor.scss'
import logo from './../logo.svg';

class DisplayInfor extends React.Component {
    constructor(props) {
        console.log(">>> call constructor: 1")

        super(props);

        //babel complier
        this.state = {
            isShowListUser: true,
        }
    }

    componentDidMount() {
        console.log(">>> Call me component did mount");
        setTimeout(() => {
            document.title = 'Nahihi'
        }, 3000);
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(">>> Call me component did update", this.props, prevProps);
        if (this.props.listUsers !== prevProps.listUsers) {
            if (this.props.listUsers.length == 5)
                alert("You have 5 users")
        }
    };

    handleShowHide = () => {
        this.setState({
            isShowListUser: !this.state.isShowListUser,
        });
    };
    render() {
        console.log(">>> call me render");

        //props: properties  
        // destructuring array/object
        const { listUsers } = this.props;//object

        // template + logic js
        return (
            <div className='display-infor-container'>
                {/* <img src={logo} /> */}
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
                                    <div>
                                        <button onClick={() => { this.props.handleDeleteUser(user.id) }}>
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
    }
}
export default DisplayInfor;
