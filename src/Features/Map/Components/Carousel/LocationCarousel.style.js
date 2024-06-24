import {View, Image, Text, Dimensions} from 'react-native'
import styled from 'styled-components/native'

const { width: screenWidth } = Dimensions.get('window');
const itemWidth = screenWidth * 0.8;
const numItemsInView = 3;

export const StyledCarouselContainer = styled(View)`
    width: 100%;
    position: absolute;
    bottom: 0;
    background-color: #fff;
    shadow-color: rgba(0, 0, 0, 0.25);
    shadow-offset: 0px 2px;
    shadow-opacity: 0.8;
    shadow-radius: 5px;
    elevation: 5;
    border-radius: 20px;
    padding: 5px 8px
`
export const StyledCarouselItem = styled(View)`
    ${'' /* width: ${itemWidth}px; */}
    gap: 10px;
    justify-content: center;
`
export const StyledActionBar = styled(View)`
    width: 50px;
    background-color: 'rgba(37, 37, 37, 0.4)';
    padding: ${(props) => props.theme.space[1]};
    border-radius: 5px;
    margin: ${(props) => props.theme.space[2]} auto;
`
export const StyledTitle = styled(Text)`
    text-align:center;
    font-size: 18px;
    font-family: ${(props) => props.theme.fonts.body}
`
export const StyledLandMarkName = styled(Text)`
    color: 'rgba(110, 110, 110, 1)';
    font-family: ${(props) => props.theme.fonts.body};
    font-size: 14px;
    text-align: center;
`
export const StyledLandMarkImage = styled(Image)`
    width: 120px;
    height: 100px;
`