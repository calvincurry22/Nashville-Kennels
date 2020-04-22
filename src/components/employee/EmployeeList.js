import React, { useContext } from "react";
import Employee from "./Employee";
import "./Employee.css"
import { EmployeeContext } from "./EmployeeProvider";
import { LocationContext } from "../location/LocationProvider";


export default () => {
    const { employees } = useContext(EmployeeContext)
    const { locations } = useContext(LocationContext)

    return (
        <div className="employees">
        {
            employees.map(employeeObj => {
                const foundLocation = locations.find(loc => loc.id === employeeObj.locationId)
                return <Employee key={employeeObj.id} employee={employeeObj} location={foundLocation} />
            })
        }
        </div>
    )
}
