import React from 'react'
import {
    StyledFlatList,
    StyledListItem,
    StyledImage,
    StyledName,
    StyledTouchable,
    StyledEmptyContainer,
    StyledEmptyText,
    StyledListContainer
} from './LocationsList.style'
import { useAppContext } from '../../../../Services/Hooks/useAppContext'

const LocationsList = ({navigation}) => {
    const {filteredLocations, setDestination} = useAppContext()

    const handleSelection = (item) => {
        setDestination(item)
        navigation.navigate("location", {location: item})
    }

    const renderItem = ({item}) => {
        return (
            <StyledTouchable onPress={()=>handleSelection(item)}>
                <StyledListItem>
                    <StyledImage source={item?.image}/>
                    <StyledName>{item?.name}</StyledName>
                </StyledListItem>
            </StyledTouchable>
        )
    }
    
    const renderEmptyComponent = () => {
        return(
            <StyledEmptyContainer>
                <StyledEmptyText>Location has not ben registered yet.</StyledEmptyText>
            </StyledEmptyContainer>    
        )
    };

    return (
        <StyledListContainer>
            <StyledFlatList
                data={filteredLocations}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                ListEmptyComponent={renderEmptyComponent}
            />
        </StyledListContainer>
    )
}

export default LocationsList