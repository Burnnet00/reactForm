import React from "react";
import {IoCloseCircleSharp, IoHammerSharp} from "react-icons/io5";
import AddUser from "./AddUser";

class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editForm: false
        }
    }

    user = this.props.user
    render() {

        return (

            <div className='user'>
                <IoCloseCircleSharp onClick={() => this.props.onDelete(this.user.id)} className='dell-icons'/>
                <IoHammerSharp onClick={() => {
                    this.setState({
                        editForm: !this.state.editForm
                    })
                }} className='edit-icons'/>
                <h3>{this.user.name} {this.user.lastname}</h3>
                <p>{this.user.about}</p>
                <b>{this.user.isHappy ? '(^^)' : ':('}</b>

                {this.state.editForm && <AddUser user={this.user} onAdd={this.props.onEdit} />}
            </div>
        )
    }


}

export default User