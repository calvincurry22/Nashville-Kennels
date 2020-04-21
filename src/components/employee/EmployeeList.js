import React, { useContext } from "react";
import Employee from "./Employee";
import { EmployeeContext } from "./EmployeeProvider";


export default () => {
    const { employees } = useContext(EmployeeContext)

    return (
        <div className="employees">
        {
            employees.map(employeeObj => <Employee key={employeeObj.id} employee={employeeObj} />)
        }
        </div>
    )
}
