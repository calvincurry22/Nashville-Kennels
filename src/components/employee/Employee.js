import React from "react"

export default ({employee}) => (
    <section className="employee">
        <h3>{employee.name}</h3>
        <p>Location: {employee.locationId}</p>
    </section>
)