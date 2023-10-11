import React from "react";
import { useLocation } from 'react-router-dom';

function EmployeeDetails() {
    // Grab the employee object from the passed in props.
    const location = useLocation();
    const { employee } = location.state;

    return (
        <div>
            <h1>Employee Detail Page</h1>
            {/* <input type="text" value={employee.name} /> */}
        <p>{employee.name}</p>
        {console.log({employee})}
        </div>
    )
}

export default EmployeeDetails;