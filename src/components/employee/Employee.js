import React from "react"

export default ({ employee, location }) => (
    <section className="employee">
        <h3>{employee.name}</h3>
        <p>Location: {location.name}</p>
    </section>
)