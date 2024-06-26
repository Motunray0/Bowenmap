import React, {useState, useEffect} from 'react'
import { useAppContext } from '../../../../Services/Hooks/useAppContext'
import { StyledSearchBar, StyledSearchContainer } from './Search.styles'
import {Keyboard} from 'react-native'
import LocationsList from '../LocationsList/LocationsList.component'


const SearchComponent = ({navigation}) => {
    const [searchKey, setSearchKey] = useState('')
    const {searchLocation} = useAppContext()

    useEffect(() => {
        searchLocation(searchKey)
    },[searchKey])

    const closeInput = () => {
        Keyboard.dismiss()
    }

    return (
        <StyledSearchContainer>
            <StyledSearchBar
                onChangeText={setSearchKey}
                value={searchKey}
                onClearIconPress={closeInput}
                elevation={1}
                placeholder='Where to?'
                mode='bar'
                inputStyle={{
                    fontFamily: 'Poppins_400Regular',
                    fontSize: 16,
                    color: 'rgba(110, 110, 110, 1)'
                }}
            />
            {searchKey !== '' && <LocationsList navigation={navigation} />}
        </StyledSearchContainer>    
    )
}

export default SearchComponent