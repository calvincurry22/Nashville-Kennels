import React, { useContext, useState } from "react"
import { AnimalContext } from "./AnimalProvider"
import Animal from "./Animal"
import "./Animal.css"
import { CustomerContext } from "../customer/CustomerProvider"
import { LocationContext } from "../location/LocationProvider"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap"
import AnimalForm from "./AnimalForm"



export default () => {
    const { animals } = useContext(AnimalContext)
    const { locations } = useContext(LocationContext)
    const { customers } = useContext(CustomerContext)

    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)

    return (
        <>
            <h2>Animals</h2>

            <div className="fakeLink href" onClick={toggle}>Make Appointment</div>

            <div className="animals">
            {
                animals.map(animalObj => {
                    const clinic = locations.find(locationObj => locationObj.id === animalObj.locationId)
                    const owner = customers.find(customerObj => customerObj.id === animalObj.customerId)
                
                    return <Animal key={animalObj.id} animal={animalObj} customer={owner} location={clinic} />
                })
            }
            </div>

            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>
                    New Animal
                </ModalHeader>
                <ModalBody>
                    <AnimalForm toggler={toggle} />
                </ModalBody>
            </Modal>
        </>
    )
}