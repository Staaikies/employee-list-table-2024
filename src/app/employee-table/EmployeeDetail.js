import React from "react";
import { useLocation } from 'react-router-dom';
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function EmployeeDetails() {
    // Grab the employee object from the passed in props.
    const location = useLocation();
    const employee = location.state;

    return (
        <div className="employeetable-wrapper">
            <div className="container">
                <h1>{employee.name}'s Profile</h1>
                {/* <input type="text" value={employee.name} /> */}
                <LazyLoadImage 
                    src={employee.profilepicture}
                    width={150}
                    height={150}
                    alt="Skylar Dryden"
                    wrapperClassName="image  image--circle  image--bordered"
                />
                <p>{employee.name}</p>
                {console.log({employee})}
            </div>
        </div>
    )
}