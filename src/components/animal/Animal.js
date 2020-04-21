import React from "react"

export default ({animal}) => (
    <section className="animal">
        <h3 className="animal__name">{animal.name}</h3>
        <div className="animal__breed">{animal.breed}</div>
        <p className="animal__owner">Owner: {animal.customerId}</p>
        <p className="animal__location">Location: {animal.locationId}</p>
    </section>
)