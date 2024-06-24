import { StyledAreaView } from '../../Components/SafeArea.component'
import {StyledSplashContainer, StyledSplashItemsContainer, TitleText, StyledLogo, StyledMapImage} from './Splash.styles'

const SplashScreen = ({navigation}) => {
    setTimeout(()=>{
        navigation.replace('map')
    },3000)

    return (
        <StyledAreaView>
            <StyledSplashContainer>
                <StyledSplashItemsContainer>
                    <StyledLogo source={require('../../Assets/Images/logo.png')}/>
                    <TitleText>
                        BOWEN MAPS
                    </TitleText>
                    <StyledMapImage source={require('../../Assets/Images/map-image.png')}/>
                </StyledSplashItemsContainer>
            </StyledSplashContainer>
        </StyledAreaView>
    )
}

export default SplashScreen