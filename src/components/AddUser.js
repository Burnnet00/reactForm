import React from "react";
import {IoCloseCircleSharp, IoHammerSharp} from "react-icons/io5";


class AddUser extends React.Component {
    user = this.props.user

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            lastname: '',
            age: 14,
            about: '',
            isHappy: false
        }
    }

    render() {

        return (
            <form ref={(el)=> this.myForm = el}>
                <input placeholder="Имя" onChange={(e) => this.setState({name: e.target.value})}/>
                <input placeholder="Фамилия" onChange={(e) => this.setState({lastname: e.target.value})}/>
                <input placeholder="Возраст" onChange={(e) => this.setState({age: e.target.value})}/>
                <textarea onChange={(e) => this.setState({about: e.target.value})}/>
                <label htmlFor="isHappy">A you happy?</label>
                <input type="checkbox" id="isHappy" onChange={(e) => this.setState({isHappy: e.target.checked})}/>
                <button type='button' onClick={() =>{
                    this.myForm.reset()
                    this.props.onAdd({
                        name: this.state.name,
                        lastname: this.state.lastname,
                        age: this.state.age,
                        about: this.state.about,
                        isHappy: this.state.isHappy,
                    })
                }
                }>Add</button>
            </form>

        )
    }


}

export default AddUser