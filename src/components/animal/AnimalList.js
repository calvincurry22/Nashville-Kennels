import React, { useContext } from "react"
import { AnimalContext } from "./AnimalProvider"
import Animal from "./Animal"
import "./Animal.css"
import { CustomerContext } from "../customer/CustomerProvider"
import { LocationContext } from "../location/LocationProvider"


export default () => {
    const { animals } = useContext(AnimalContext)
    const { locations } = useContext(LocationContext)
    const { customers } = useContext(CustomerContext)

    return (
        <div className="animals">
        {
            animals.map(animalObj => {
                const clinic = locations.find(locationObj => locationObj.id === animalObj.locationId)
                const owner = customers.find(customerObj => customerObj.id === animalObj.customerId)
                
                return <Animal key={animalObj.id} animal={animalObj} customer={owner} location={clinic} />
            })
        }
        </div>
    )
}