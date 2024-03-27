import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Button } from '../common/Components';
import { CreateModal, UpdateModal } from './Modal';

const baseURL = 'https://6524183bea560a22a4e96944.mockapi.io/fakeData/Employees';

function EmployeeListPage() {
  const [employees, setEmployees] = useState([]);
  const [createModalOpen, setCreateModal] = useState(false);
  const [updateModalOpen, setUpdateModal] = useState(false);
  // Selected employee state for editing and updating.
  const [selectedEmployee, setSelectedEmployee] = useState(null);
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

  const createEmployee = (name, email, address) => {
    axios
      .post(baseURL, {
        name,
        email,
        address
      })
      .then((response) => {
        setEmployees([...employees, response.data]);
      })
      .catch(error => {
        console.error('Error posting data:', error);
      });
  }

  const updateEmployee = (id, name, email, address) => {
    axios.put(`${baseURL}/${id}`, {
      name,
      email,
      address
    })
      .then((response) => {
        setEmployees((prevEmployees) =>
          prevEmployees.map((employee) =>
            employee.id === id ? response.data : employee
          )
        );
        setUpdateModal(false);
      })
      .catch(error => {
        console.error('Error updating data:', error);
      });
  }

  const deleteEmployee = (id) => {
    axios.delete(`${baseURL}/${id}`)
      .then(() => {
        setEmployees((prevEmployees) => prevEmployees.filter(employee => employee.id !== id));
      })
      .catch(error => {
        console.error('Error deleting data:', error);
      });
  }

  // Handle all the Modal show/hide and set employee when editing.
  const handleCreateModal = () => {
    setCreateModal(!createModalOpen);
  }

  const handleEditEmployee = (employee) => {
    setSelectedEmployee(employee);
    setUpdateModal(true);
  }

  const handleUpdateModal = () => {
    setUpdateModal(!updateModalOpen);
  }

  return (
    <>
      <div className="container">
        <div className="flex-row">
          <h1 className="heading heading--large heading--flush">Employee List</h1>
          <Button
          text="Add New Employee"
          onClick={handleCreateModal}
          style="primary"
          size="large"
          icon="plus"
          />
        </div>

        <table className="employee-table">
          <thead>
            <tr>
              <th>ID:</th>
              <th>Name:</th>
              <th>Email:</th>
              <th>Address:</th>
              <th>Actions:</th>
            </tr>
          </thead>
          <tbody>
            {Array.from(employees).map(employee => (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>
                  <a 
                    className="employee-table__link"
                    onClick={() => navigate(`/employee/${employee.id}`, { state: employee })}>
                    {employee.name} 
                  </a>
                </td>
                <td>{employee.email}</td>
                <td>{employee.address}</td>
                <td className="employee-table__actions">
                  <Button
                    text="View Employee"
                    onClick={() => navigate(`/employee/${employee.id}`, { state: employee })}
                    style="primary"
                    size="small"
                    icon="user"
                    iconOnly={true}
                  />
                  <Button
                    text="Edit Employee"
                    onClick={() => handleEditEmployee(employee)}
                    style="primary"
                    size="small"
                    icon="pencil"
                    iconOnly={true}
                  />
                  <Button
                    text="Delete this employee"
                    onClick={() => deleteEmployee(employee.id)}
                    style="primary"
                    size="small"
                    icon="trash"
                    iconOnly={true}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <CreateModal
        show={createModalOpen}
        handleCreateModal={handleCreateModal}
        url={baseURL}
        createEmployee={createEmployee}
      />

      <UpdateModal
        show={updateModalOpen}
        handleUpdateModal={handleUpdateModal}
        employee={selectedEmployee}
        updateEmployee={updateEmployee}
      />
    </>
  );
}

export default EmployeeListPage;