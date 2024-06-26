import {Image, View, Text, TouchableOpacity} from 'react-native'
import { FontAwesome5, FontAwesome6, Ionicons } from '@expo/vector-icons';
import styled from 'styled-components/native'

export const StyledCard = styled(View)`
    flex:1;
    position: relative;
    background-color: white;
    padding: 20px;
    font-family: ${(props) => props.theme.fonts.body};
`
export const StyledCloseButton = styled(Ionicons)`

`
export const StyledPerson = styled(FontAwesome6)`

`
export const StyledMotorcycle = styled(FontAwesome6)`

`
export const StyledCar = styled(FontAwesome5)`

`
export const StyledImage = styled(Image)`
    width: 100%;
    height: 200px;
    border-radius: 7px;
    margin: 30px 0;

`
export const StyledCardHead = styled(View)`
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
export const StyledLocationDetails = styled(View)`

`
export const StyledTripDetails = styled(View)`

`
export const StyledTripDetail = styled(View)`

`
export const StyledTitle = styled(Text)`
    font-size: 24px;
    margin: 8px 0;
    font-weight: 600;
`
export const StyledSubTitle = styled(Text)`
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 12px;
`
export const StyledInfo = styled(Text)`
    font-weight: 600;
    line-height: 20px;
    font-size: 16px;
`
export const StyledStartButton = styled(TouchableOpacity)`
    background-color: 'rgba(15, 119, 240, 1)';
    width: 100%;
    margin:  50px auto 0 auto;
    padding: 20px;
    border-radius: 10px;
`
export const StyledButtonText = styled(Text)`
    font-size: 18px;
    font-weight: 700;
    color: white;
    text-align: center;
    font-family: ${(props) => props.theme.fonts.body};
`