import React, {useState} from 'react'
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
    StyledTripDetails 
} from './Location.styles'
import { StyledAreaView } from '../../../../Components/SafeArea.component'

const LocationScreen = ({route}) => {
    const [visible, setVisible] = useState(true)

    const location = route.params
    
    if(!visible){
        return null
    }
    else{
        return (
            <StyledAreaView>
                <StyledCard elevation={2}>
                    <StyledCloseButton 
                        name="close" 
                        size={24} 
                        color='black' 
                        onPress={()=>setVisible(false)}
                    />

                    <StyledTitle></StyledTitle>
                    
                    <StyledLocationDetails>
                        <StyledImage/>
                        <StyledTripDetails>
                            <StyledTripDetail></StyledTripDetail>
                            <StyledTripDetail></StyledTripDetail>
                            <StyledTripDetail></StyledTripDetail>
                        </StyledTripDetails>
                    </StyledLocationDetails>

                    <StyledSubTitle>About</StyledSubTitle>

                    <StyledInfo></StyledInfo>

                    <StyledStartButton
                        mode="contained"
                        onPress={()=>{}}
                    >
                        Get Direction
                    </StyledStartButton>

                </StyledCard>
            </StyledAreaView>
        )
    }
}

export default LocationScreen