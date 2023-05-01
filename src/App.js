import './App.css';
import { useEffect, useState } from "react";

function App() {

  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/api_one")
      .then((response) => response.json())
      .then((json) => setUsers(json))
  }, []);

  return (
    <div className="App">
      <h1><u>User List</u></h1>
      <br></br>
      <br></br>
      <table class="table table-bordered table-hover">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Email</th>
          <th scope="col">First_name</th>
          <th scope="col">Last_name</th>
          <th scope="col">Gender</th>
          <th scope="col">Income</th>
          <th scope="col">City</th>
          <th scope="col">Car</th>
          <th scope="col">Quote</th>
          <th scope="col">Phone_price</th>
        </tr>
        </thead>
        {users.map((user) => (
            <tbody>
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.email}</td>
            <td>{user.first_name}</td>
            <td>{user.last_name}</td>
            <td>{user.gender}</td>
            <td>{user.income}</td>
            <td>{user.city}</td>
            <td>{user.car}</td>
            <td>{user.quote}</td>
            <td>{user.phone_price}</td>
          </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
}

export default App;
