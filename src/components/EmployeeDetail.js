import React from "react";
import { useLocation } from 'react-router-dom';

export default function EmployeeDetails() {
    // Grab the employee object from the passed in props.
    const location = useLocation();
    const employee = location.state;

    return (
        <div>
            <h1>{employee.name}'s Profile</h1>
            {/* <input type="text" value={employee.name} /> */}
            <img src={employee.profilepicture} />
            <p>{employee.name}</p>
            {console.log({employee})}
        </div>
    )
}