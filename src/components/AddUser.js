import React from "react";
import {IoCloseCircleSharp, IoHammerSharp} from "react-icons/io5";


class AddUser extends React.Component {
    /*user = this.props.user*/
    userAdd = {}
    constructor(props) {
        super(props);
        this.state = {
            first_name: '',
            last_name: '',
            age: 14,
            about: '',
            isHappy: false
        }
    }

    render() {

        return (
            <form ref={(el)=> this.myForm = el}>
                <input placeholder="Имя" onChange={(e) => this.setState({first_name: e.target.value})}/>
                <input placeholder="Фамилия" onChange={(e) => this.setState({last_name: e.target.value})}/>
                <input placeholder="Возраст" onChange={(e) => this.setState({age: e.target.value})}/>
                <textarea onChange={(e) => this.setState({about: e.target.value})}/>
                <label htmlFor="isHappy">A you happy?</label>
                <input type="checkbox" id="isHappy" onChange={(e) => this.setState({isHappy: e.target.checked})}/>
                <button type='button' onClick={() =>{
                    this.myForm.reset()
                    this.userAdd = {
                        first_name: this.state.first_name,
                        last_name: this.state.last_name,
                        age: this.state.age,
                        about: this.state.about,
                        isHappy: this.state.isHappy,
                    }
                    if (this.props.user)
                        this.userAdd.id = this.props.user.id
                    this.props.onAdd(this.userAdd)

                }
                }>Add</button>
            </form>

        )
    }


}

export default AddUser