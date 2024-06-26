import {View, Image, Text, Dimensions, Platform, TouchableOpacity} from 'react-native'
import styled from 'styled-components/native'

const { width: screenWidth } = Dimensions.get('window');
const itemWidth = screenWidth * 0.8;

export const StyledCarouselContainer = styled(View)`
    width: 100%;
    position: absolute;
    bottom: 0;
    background-color: #fff;
    padding: 5px 0;
    border-radius: 20px;
    ${Platform.select({
    ios: `
        shadow-color: rgba(0, 0, 0, 0.25);
        shadow-offset: 0px 2px;
        shadow-opacity: 0.8;
        shadow-radius: 5px;
    `,
    android: `
        elevation: 30;
    `
    })};
`
export const StyledCarouselItem = styled(View)`
    width: ${itemWidth}px;
    gap: 10px;
    justify-content: center;
    align-items: center;
`
export const StyledActionBar = styled(View)`
    width: 50px;
    background-color: rgba(37, 37, 37, 0.4);
    padding: ${(props) => props.theme.space[1]};
    border-radius: 5px;
    margin: ${(props) => props.theme.space[2]} auto;
`
export const StyledTitle = styled(Text)`
    text-align:center;
    font-size: 18px;
    font-family: ${(props) => props.theme.fonts.body};
    margin-bottom: 15px;
`
export const StyledLandMarkName = styled(Text)`
    color: 'rgba(110, 110, 110, 1)';
    font-family: ${(props) => props.theme.fonts.body};
    font-size: 14px;
`
export const StyledLandMarkImage = styled(Image)`
    width: 120px;
    height: 100px;
    object-fit: cover;
`
export const StyledTouchable = styled(TouchableOpacity)`

`