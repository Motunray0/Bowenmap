import {View, Image, Text} from 'react-native'
import styled from 'styled-components/native'

export const StyledSplashContainer = styled(View)`
    flex: 1;
    justify-content: center;
    align-items: center
`
export const StyledSplashItemsContainer = styled(View)`
    width: 90%;
    height: 200px;
    justify-content: center;
    align-items: center
`
export const TitleText = styled(Text)`
    font-size: ${(props) => props.theme.fontSizes.h3};
    padding-top: ${(props) => props.theme.space[2]};
    font-weight: ${(props) => props.theme.fontWeights.bold};
    font-family: ${(props) => props.theme.fonts.body};
    color: ${(props) => props.theme.colors.splashText};

`
export const StyledLogo = styled(Image)`

`
export const StyledMapImage = styled(Image)`
`