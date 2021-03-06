import React from "react"

export default ({animal, customer, location}) => (
    <section className="animal">
        <h3 className="animal__name">{animal.name}</h3>
        <div className="animal__breed">Breed:{animal.breed}</div>
        <p className="animal__owner">Owner: {customer.name}</p>
        <p className="animal__location">Location: {location.name}</p>
    </section>
)