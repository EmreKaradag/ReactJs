import React, {Component} from 'react';
import AddUser from "./components/AddUser";
import Users from "./components/Users";
import User from "./components/User";
class App extends Component {

 /* state = {
    users : []
  };*/

 constructor(props){
    super(props);

    this.state = {
      users : [
        {
          id : 1,
          name : "Emre Karadag",
          email : "emre@gmail.com"
        },
        {
          id : 2,
          name : "Berfin Karadag",
          email : "berfin@gmail.com"
        },
        {
          id : 3,
          name : "Simba Karadag",
          email : "simba@gmail.com"
        }
      ]
    };
    this.deleteUser = this.deleteUser.bind(this);
    this.addUser = this.addUser.bind(this);
  }
  addUser(newUser){
   let updatedUsers = this.state.users;

   updatedUsers.push(newUser);

   this.setState({
     users : updatedUsers
   })
  }

  deleteUser(id) {
    let updatedUsers = this.state.users;
    updatedUsers = updatedUsers.filter(user => user.id !== id);
    // state direct ımmutable
    this.setState({
      users : updatedUsers
    })
  }

  render() {
    return (
        <div className="container">
          <h4>User App</h4>
          <hr/>
        <AddUser addUser = {this.addUser}/>
          <hr/>
          <Users deleteUser={this.deleteUser}  users={this.state.users}/>
        </div>
    );
  }
}

export default App;
