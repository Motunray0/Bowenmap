import { NavigationContainer } from '@react-navigation/native'
import AppNavigator from './App.navigator'

export const Navigation = () => {
    return(
        <NavigationContainer>
            <AppNavigator/>
        </NavigationContainer>
    )
}