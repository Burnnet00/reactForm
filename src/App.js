import React from "react";
import Header from "./components/Header";
import Users from "./components/Users";
import AddUser from "./components/AddUser";

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            users: [
                {
                    id: 1,
                    name: 'Bob',
                    lastname: 'Marley',
                    age: 43,
                    about: 'Lorem',
                    isHappy: true
                },
                {
                    id: 2,
                    name: 'Jon',
                    lastname: 'Weak',
                    age: 33,
                    about: 'Lorem',
                    isHappy: false
                },
            ]

        }
        this.addUser = this.addUser.bind(this),
        this.deleteUser = this.deleteUser.bind(this),
        this.editUser = this.editUser.bind(this)
    }
    render() {
        return (<div>
            <Header title="List users"/>
            <main>
                <Users users={this.state.users} onEdit={this.editUser} onDellete={this.deleteUser}/>
            </main>
            <aside>
                <AddUser onAdd={this.addUser}/>
            </aside>
        </div>)
    }
    deleteUser(id) {
        this.setState({
            users: this.state.users.filter((el) => el.id !==id)/*перебираю массив фильтром и перезаписываю все кроме id что передается в этот метод*/
        })
    }
    editUser(user) {
        let allUsers = this.state.users
        allUsers[user.id-1] = user

        this.setState({users: []}, () => {
            this.setState({users:[...allUsers]})
        })
    }
    addUser(user) {
        const id = this.state.users.length + 1
        this.setState({users: [...this.state.users, {id, ...user}]})
    }
}
export default App