import React, { useState } from "react"
import { AnimalProvider } from "./animal/AnimalProvider"
import AnimalList from "./animal/AnimalList"
import "./animal/Animal.css"
import { CustomerProvider } from "./customer/CustomerProvider"
import CustomerList from "./customer/CustomerList"
import "./customer/Customer.css"
import { LocationProvider } from "./location/LocationProvider"
import LocationList from "./location/LocationList"
import "./location/Location.css"
import { EmployeeProvider } from "./employee/EmployeeProvider"
import EmployeeList from "./employee/EmployeeList"
import "./employee/Employee.css"
import "./Kennel.css"
import { SearchBar } from "./search/SearchBar"
import { SearchResults } from "./search/SearchResults"
import "./Layout.css"

export default () => {
    const [searchTerms, setTerms] = useState(null)
    return (
        <div className="mainContainer">
            <AnimalProvider>
                <CustomerProvider>
                    <EmployeeProvider>
                        <LocationProvider>
                            <div className="searchContainer">
                                <SearchBar setTerms={setTerms} />
                                <SearchResults searchTerms={searchTerms} />
                            </div>
                            <div className="dataContainer">
                                <h2>Nashville Kennels</h2>
                                <small>Loving care when you're not there.</small>
                                <address>
                                    <div>Visit Us at the Nashville North Location</div>
                                    <div>500 Puppy Way</div>
                                </address>
        
                                <LocationList />
                                <AnimalList />
                                <CustomerList />
                                <EmployeeList />
                            </div>
                        </LocationProvider>
                    </EmployeeProvider>
                </CustomerProvider>
            </AnimalProvider>
        </div>
    )
}

