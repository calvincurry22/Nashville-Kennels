import React, { useContext } from "react"
import { AnimalContext } from "./AnimalProvider"
import Animal from "./Animal"
import "./Animal.css"


export default () => {
    const { animals } = useContext(AnimalContext)

    return (
        <div className="animals">
        {
            animals.map(animalObj => <Animal key={animalObj.id} animal={animalObj} />)
        }
        </div>
    )
}