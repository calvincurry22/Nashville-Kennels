import React, { useContext, useRef } from "react"
import { AnimalContext } from "./AnimalProvider"
import { LocationContext } from "../location/LocationProvider"
import "./Animal.css"

export default props => {
    const { addAnimal } = useContext(AnimalContext)
    const { locations } = useContext(LocationContext)
    const name = useRef()
    const breed = useRef()
    const location = useRef()
    

    const constructNewAnimal = () => {
        const locationId = parseInt(location.current.value)

        if (locationId === 0) {
            window.alert("Please select a location")
        } else {
            addAnimal({
                name: name.current.value,
                breed: breed.current.value,
                locationId: locationId,
                customerId: parseInt(localStorage.getItem("kennel_customer"))
            }) 
            .then(props.toggler)
        }
    }

    return (
        <form className="animalForm">
            <h2 className="animalForm__title">Make Appointment</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="AnimalName">Animal name: </label>
                    <input
                        type="text"
                        id="animalName"
                        ref={name}
                        required
                        autoFocus
                        className="form-control"
                        placeholder="Animal name"
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="AnimalBreed">Animal breed: </label>
                    <input
                        type="text"
                        id="animalBreed"
                        ref={breed}
                        required
                        autoFocus
                        className="form-control"
                        placeholder="Animal breed"
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="location">Assign to location: </label>
                    <select
                        defaultValue=""
                        name="location"
                        ref={location}
                        id="animalLocation"
                        className="form-control"
                    >
                        <option value="0">Select a location</option>
                        {locations.map(e => (
                            <option key={e.id} value={e.id}>
                                {e.name}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
            <button type="submit"
                onClick={
                    evt => {
                        evt.preventDefault() // Prevent browser from submitting the form
                        constructNewAnimal()
                    }
                }
                className="btn btn-primary">
                Save Animal
            </button>
        </form>
    )
}