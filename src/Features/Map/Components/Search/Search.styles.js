import { Searchbar } from "react-native-paper"
import {View} from 'react-native'
import styled from 'styled-components/native'

export const StyledSearchBar = styled(Searchbar)`
    width: 95%;
    background-color: white;
    position: absolute;
    border-radius: 10px;
    margin: 10px;
    color: 'rgba(211, 211, 211, 1)'
`
export const StyledSearchContainer = styled(View)`
    width: 95%;
    margin: 0 auto;
    position: relative;
`