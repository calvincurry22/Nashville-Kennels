import React, { useState, useEffect } from "react"
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
    const [activeList, setActiveList] = useState("locations")
    const [components, setComponents] = useState()

    // HIGHER ORDER FUNCTION. IT RETURNS OTHER FUNCTION (i.e. COMPONENTS)
    const showLocations = () => (
        <LocationProvider>
            <LocationList />
        </LocationProvider>
    )

    const showCustomers = () => (
        <CustomerProvider>
            <CustomerList />
        </CustomerProvider>
    )

    const showEmployees = () => (
        <EmployeeProvider>
            <LocationProvider>
                <EmployeeList />
            </LocationProvider>
        </EmployeeProvider>
    )

    /*
        This effect hook determines which list is shown
        based on the state of the `activeList` variable.
    */
    useEffect(() => {
        if (activeList === "customers") {
            setComponents(showCustomers)
        }
        else if (activeList === "locations") {
            setComponents(showLocations)
        }
        else if (activeList === "employees") {
            setComponents(showEmployees)
        }
    }, [activeList])


    return (
        <div className="mainContainer">
            <div className="searchContainer">
                <AnimalProvider>
                    <CustomerProvider>
                        <LocationProvider>
                            <SearchBar setTerms={setTerms} />
                            <SearchResults searchTerms={searchTerms} />
                        </LocationProvider>
                    </CustomerProvider>
                </AnimalProvider>
            </div>
            <div className="dataContainer">
                <h1>Nashville Kennels</h1>
                <small>Loving care when you're not there.</small>
                <div className="listContainer">
                    <div className="links">
                        <div className="fakeLink href" onClick={() => setActiveList("locations")}>Locations</div>
                        <div className="fakeLink href" onClick={() => setActiveList("customers")}>Customers</div>
                        <div className="fakeLink href" onClick={() => setActiveList("employees")}>Employees</div>
                    </div>
                    <div className="listDisplay">
                        {components}
                    </div>
                </div>
            </div>
        </div>
    )
    
}

