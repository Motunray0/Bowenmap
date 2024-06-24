import styled from 'styled-components/native'
import {Text, Image, View, FlatList, TouchableOpacity} from 'react-native';

export const StyledName = styled(Text)`

`
export const StyledEmptyText = styled(Text)`
    text-align: center;
    margin-top: 110px;
`
export const StyledImage = styled(Image)`

`
export const StyledListItem = styled(View)`

`
export const StyledEmptyContainer = styled(View)`
`
export const StyledFlatList = styled(FlatList)`

`
export const StyledListContainer = styled(View)`
    flex: 1;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 100%;
    height: 250px;
    margin: 0 auto;
    top: 100px;
    border-radius: 10px;
    background-color: #fff;
    shadow-color: rgba(0, 0, 0, 0.25);
    shadow-offset: 0px 2px;
    shadow-opacity: 0.8;
    shadow-radius: 5px;
    elevation: 5;
    padding: ${(props) => props.theme.space[2]};
`
export const StyledTouchable = styled(TouchableOpacity)`

`