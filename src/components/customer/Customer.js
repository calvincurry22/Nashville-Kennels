import React from "react"

export default ({ customer }) => (
    <section className="customer">
        <h3>{customer.name}</h3>
        <address>{customer.address}</address>
    </section>
)