import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {Button, Icon} from './Common';

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

function EmployeeListPage() {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

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
  

  const deleteEmployee = (id) => {
    axios.delete(baseURL + '/' + id)
      .then(() => {
        setEmployees((prevEmployees) => prevEmployees.filter(employee => employee.id !== id));
      })
      .catch(error => {
        console.error('Error deleting data:', error);
      });
  }

  const createEmployee = (e) => {
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
      <div className="heading-button-row">
        <h1>Employee List</h1>
        <Button Props={{
          text: "Add New Employee", 
          style: "cta",
          size: "default",
          icon: "plus",
          onClick: createEmployee
        }} />
      </div>
      
      <table className='employee-table'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {Array.from(employees).map(employee => (
             
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td onClick={() => navigate(`/employee/${employee.id}`, {state: employee})}>{employee.name}</td>
                <td>{employee.email}</td>
                <td>{employee.address}</td>
                <td>
                  <Button Props={{
                    text: "Edit this employee",
                    icon: "pencil",
                    iconOnly: true,
                    size: "small",
                  }}/>
                  <Button Props={{
                    text: "Delete this employee",
                    icon: "trash",
                    iconOnly: true,
                    size: "small",
                    onClick: () => deleteEmployee(employee.id)
                  }}/>
                </td>
              </tr>
              
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeListPage;