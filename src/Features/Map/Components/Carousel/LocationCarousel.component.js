import React from 'react'
import {
    StyledCarouselContainer,
    StyledCarouselItem,
    StyledLandMarkImage,
    StyledLandMarkName,
    StyledTitle,
    StyledActionBar
} from './LocationCarousel.style'
import { Dimensions, Animated } from 'react-native';
import { Locations } from '../../../../Services/Locations';
import Carousel from 'react-native-reanimated-carousel';
import {View, Text} from 'react-native'


const { width: screenWidth } = Dimensions.get('window');
const itemWidth = screenWidth / 3;

const LocationCarouselComponent = () => {
    // const carouselRef = useRef(null);

    return (
        <StyledCarouselContainer>
            <StyledActionBar/>
            <StyledTitle>Explore Bowen</StyledTitle>
            <Carousel
                width={screenWidth}
                height={screenWidth / 2}
                data={Locations}
                scrollAnimationDuration={1000}
                itemWidth={itemWidth} // Set item width to display 3 items in view
                sliderWidth={screenWidth}
                renderItem={({item}) => (
                    <StyledCarouselItem>
                        <StyledLandMarkImage source={item.image} />
                        <StyledLandMarkName>{item.name}</StyledLandMarkName>
                    </StyledCarouselItem>
                )}
            />
        </StyledCarouselContainer>
    )
}

export default LocationCarouselComponent