import React from 'react'
import { 
    StyledCard, 
    StyledCloseButton, 
    StyledLocationDetails,
    StyledImage,
    StyledInfo,
    StyledStartButton,
    StyledTitle,
    StyledSubTitle,
    StyledTripDetail,
    StyledTripDetails,
    StyledButtonText,
    StyledCardHead 
} from './Location.styles'
import { StyledAreaView } from '../../../../Components/SafeArea.component'
import { useAppContext } from '../../../../Services/Hooks/useAppContext'

const LocationScreen = ({route, navigation}) => {
    const {setDestination} = useAppContext()

    const { location } = route.params
    const { name, image, about } = location

    const getDirection = () => {
        setDestination(location)
        navigation.navigate("map")
    }

    const goBack = () => {
        navigation.navigate("map")
    }
    
    return (
        <StyledAreaView>
            <StyledCard>
                <StyledCardHead>
                
                    <StyledTitle>{name}</StyledTitle>

                    <StyledCloseButton 
                        name="close" 
                        size={40} 
                        color='black' 
                        onPress={goBack}
                    />

                </StyledCardHead>
                
                
                <StyledLocationDetails>
                    <StyledImage source={image}/>
                    <StyledTripDetails>
                        <StyledTripDetail></StyledTripDetail>
                        <StyledTripDetail></StyledTripDetail>
                        <StyledTripDetail></StyledTripDetail>
                    </StyledTripDetails>
                </StyledLocationDetails>

                <StyledSubTitle>About</StyledSubTitle>

                <StyledInfo>{about}</StyledInfo>

                <StyledStartButton onPress={getDirection}>
                    <StyledButtonText>Get Direction</StyledButtonText>
                </StyledStartButton>

            </StyledCard>
        </StyledAreaView>
    )
}


export default LocationScreen