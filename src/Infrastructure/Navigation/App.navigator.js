import {createStackNavigator, TransitionPresets} from '@react-navigation/stack'
import SplashScreen from "../../Features/Splash/Splash.screen";
import MapScreen from "../../Features/Map/Screens/Main/Map.screen";
import LocationScreen from '../../Features/Map/Screens/Location/Location.screen';

const AppStack = createStackNavigator(); 

const AppNavigator = () => {
    return (
        <AppStack.Navigator
            headerShown="false"
            screenOptions={{...TransitionPresets.SlideFromRightIOS}}
            initialRouteName="splash"
        >
            <AppStack.Screen
                name="splash"
                component={SplashScreen}
                options={{
                    headerShown: false
                }}
            />

            <AppStack.Screen
                name="map"
                component={MapScreen}
                options={{
                    headerShown: false
                }}
            />

            <AppStack.Screen
                name="location"
                component={LocationScreen}
                options={{
                    headerShown: false
                }}
            />
        </AppStack.Navigator>
    )
}

export default AppNavigator;