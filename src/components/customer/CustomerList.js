import Customer from "./Customer";
import { CustomerContext } from "./CustomerProvider";
import React, { useContext } from "react"
import "./Customer.css"


export default () => {
    const { customers } = useContext(CustomerContext)

    return (
        <>
            <h2>Customers</h2>
            <div className="customers">
            {
                customers.map(customerObj => <Customer key={customerObj.id} customer={customerObj} />)
            }
            </div>
        </>
    )
}
