import React from "react";
import User from "./User";

class Users extends React.Component{

    render() {
        if (this.props.users.length > 0)
            return(<div>
                {this.props.users.map((el)=>(
                    <User onDelete={this.props.onDellete} key={el.id} user={el}/>
                )) }
            </div>)
        else
            return (<div className='user'>
                <h3>Users absent</h3>
            </div>)
    }


}
export default Users