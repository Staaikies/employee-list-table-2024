import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const baseURL = 'https://6524183bea560a22a4e96944.mockapi.io/fakeData/Employees';

// function EmployeeTable({employees}) {
//     return (
//         <ul>
//         {Array.from(employees).map(employee => (
//             <li key={employee.id}>
//                 {/* Display the employee name, be ready to route to the employee id and pass in the employee object to the link to be displayed on EmployeeDetail */}
//                 <Link to={`/employee/${employee.id}`} state={{ employee: employee }} >{employee.name}</Link>
//             </li>
//         ))}
//       </ul>
        
//     )
// }

function EmployeeTable({employees}) {
  return (
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {Array.from(employees).map(employee => (
             
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.name}</td>
                <td>{employee.email}</td>
              </tr>
              
          ))}
        </tbody>
      </table>
  )
}

function EmployeeListPage() {
  const [employees, setEmployees] = useState([]);

  // Get the dummy employee list with a catch for errors.
  useEffect(() => {
    axios.get(baseURL)
      .then(response => {
        setEmployees(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  function createPost(e) {
    e.preventDefault();
    axios 
      .post(baseURL, {
        id: 43434,
        name: "Test Testyburger",
        username: "TestyMcTestTest",
        email: "abd@abc.com"
      })
      .then((response) => {
        setEmployees([...employees, response.data]);
      })
      .catch(error => {
        console.error('Error posting data:', error);
      });
  }

  return (
    <div className='container'>
      <h1>Employee List</h1>
      <button onClick={createPost}>Add New Employee</button> 
      <EmployeeTable employees={employees} />
    </div>
  );
}

export default EmployeeListPage;