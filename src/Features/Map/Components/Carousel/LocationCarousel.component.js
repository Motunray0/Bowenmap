import React from 'react'
import {
    StyledCarouselContainer,
    StyledCarouselItem,
    StyledLandMarkImage,
    StyledLandMarkName,
    StyledTitle,
    StyledActionBar,
    StyledTouchable
} from './LocationCarousel.style'
import { Dimensions, Animated } from 'react-native';
import { Locations } from '../../../../Services/Locations';
import Carousel from 'react-native-reanimated-carousel';

const { width: screenWidth } = Dimensions.get('window');

const LocationCarouselComponent = ({navigation}) => {

    const handleLocationSelection = (item) => {
        navigation.navigate("location", {location: item})
    }    

    const renderItem = () => {
        return(
            <StyledTouchable onPress={()=>handleLocationSelection(item)}>
                <StyledCarouselItem>
                    <StyledLandMarkImage source={item.image} />
                    <StyledLandMarkName>{item.name}</StyledLandMarkName>
                </StyledCarouselItem>
            </StyledTouchable>
        )
    }

    return (
        <StyledCarouselContainer>
            <StyledActionBar/>
            <StyledTitle>Explore Bowen</StyledTitle>
            <Carousel
                width={screenWidth}
                height={screenWidth / 2}
                data={Locations}
                scrollAnimationDuration={1000}
                mode="parallax"
                modeConfig={{
                    parallaxScrollingScale: 1.0,
                    parallaxScrollingOffset: 250,
                }}
                renderItem={({item}) => (
                    <StyledTouchable onPress={()=>handleLocationSelection(item)}>
                        <StyledCarouselItem>
                            <StyledLandMarkImage source={item.image} />
                            <StyledLandMarkName>{item.name}</StyledLandMarkName>
                        </StyledCarouselItem>
                    </StyledTouchable>
                )}
            />
        </StyledCarouselContainer>
    )
}

export default LocationCarouselComponent