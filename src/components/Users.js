import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { DataTable } from 'react-data-components';


const Users = () => {
  const [users, setUser] = useState([]);
  var columns = [
    { title: 'id', prop: 'id'  },
    { title: 'Name', prop: 'name' },
    { title: 'Username', prop: 'username' },
    { title: 'Email', prop: 'email' }
  ];
  
  // var data = [
  //   { name: 'name value', city: 'city value', address: 'address value', phone: 'phone value' }
  //   // It also supports arrays
  //   // [ 'name value', 'city value', 'address value', 'phone value' ]
  // ];
  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("https://jsonplaceholder.typicode.com/users");
    setUser(result.data.reverse());
    {console.log("test",users)}
  };

  

  return (
    
    <div>
      <div  style={{ padding: 80 }} className="py-4">
      

        <h1>Users</h1>
        {/* <table class="table border shadow">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">User Name</th>
              <th scope="col">Email</th>
              
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
               
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                
              </tr>
            ))}
          </tbody>
        </table> */}


<DataTable
      keys="name"
      columns={columns}
      initialData={users}
      initialPageLength={5}
      initialSortBy={{ prop: 'city', order: 'descending' }}
    />
 
      </div>
    </div>
  );
};

export default Users;
