import React from 'react'
import { StyledAreaView } from '../../../../Components/SafeArea.component'
import LocationCarouselComponent from '../../Components/Carousel/LocationCarousel.component'
import MapComponent from '../../Components/Map/Map.component'

const MapScreen = ({navigation}) => {
    return (
        <StyledAreaView>
            <MapComponent/>
            <LocationCarouselComponent navigation={navigation}/>
        </StyledAreaView>
    )
}

export default MapScreen