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

const LocationsList = () => {
    const {filteredLocations, setCurrentLocation} = useAppContext()

    const renderItem = ({item}) => {
        return (
            <StyledTouchable onPress={()=>setCurrentLocation(item)}>
                <StyledListItem>
                    <StyledImage/>
                    <StyledName></StyledName>
                </StyledListItem>
            </StyledTouchable>
        )
    }
    
    const renderEmptyComponent = () => {
        return(
            <StyledEmptyContainer>
                <StyledEmptyText>Location was not found.</StyledEmptyText>
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