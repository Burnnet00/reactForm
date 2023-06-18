import React from "react";
import {IoCloseCircleSharp, IoHammerSharp} from "react-icons/io5";


class User extends React.Component {
    user = this.props.user
    render() {

        return (

            <div className='user'>
                <IoCloseCircleSharp className='dell-icons'/>
                <IoHammerSharp className='edit-icons'/>
                <h3>{this.user.name} {this.user.lastname}</h3>
                <p>{this.user.about}</p>
                <b>{this.user.isHappy ? '(^^)' : ':('}</b>
            </div>
        )
    }


}

export default User