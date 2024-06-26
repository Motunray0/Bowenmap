import React, {useState, createContext} from 'react'
import { Locations } from '../Locations'

export const AppContext = createContext({
    filteredLocations: [],
    destination: null,
    setDestination: (destination) => {},
    searchLocation: (location) => {}
})

export const AppContextProvider = ({children}) => {
    const [filteredLocations, setFilteredLocations] = useState([])
    const [destination, setDestination] = useState(null)

    const searchLocation = (currentKey) => {
        const currentLocations = Locations.filter(location => location.name.toLowerCase().includes(currentKey.toLowerCase()))

        setFilteredLocations([...currentLocations])
    }

    const value = {
        destination,
        filteredLocations,
        setDestination,
        searchLocation
    }

    return(
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}