import React, {useState, createContext} from 'react'
import { Locations } from '../Locations'

export const AppContext = createContext({
    filteredLocations: [],
    currentLocation: null,
    setCurrentLocation: () => {},
    searchLocation: (location) => {}
})

export const AppContextProvider = ({children}) => {
    const [filteredLocations, setFilteredLocations] = useState([])
    const [currentLocation, setCurrentLocation] = useState(null)

    const searchLocation = (currentKey) => {
        const currentLocations = Locations.filter(location => location.name.toLowerCase().includes(currentKey.toLowerCase()))

        setFilteredLocations([...currentLocations])
    }

    const value = {
        currentLocation,
        filteredLocations,
        setCurrentLocation,
        searchLocation
    }

    return(
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}