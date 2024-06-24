import {Text} from 'react-native'
import LocationCarouselComponent from '../../Components/Carousel/LocationCarousel.component'
import { StyledAreaView } from '../../../../Components/SafeArea.component'
import SearchComponent from '../../Components/Search/Search.component'

const MapScreen = () => {
    return (
        <StyledAreaView>
            <SearchComponent/>
            <LocationCarouselComponent/>
        </StyledAreaView>
    )
}

export default MapScreen