import React from 'react'
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import {theme} from './src/Infrastructure/Theme/Index'
import { ThemeProvider } from 'styled-components';
import {useFonts as usePoppins, Poppins_400Regular} from '@expo-google-fonts/poppins'
import { AppContextProvider } from './src/Services/Contexts/App.context';
import { Navigation } from './src/Infrastructure/Navigation/Navigation';
import 'react-native-gesture-handler';

const App = () => {
  const [poppinsHasLoaded] = usePoppins({
    Poppins_400Regular
  })

  if(!poppinsHasLoaded){
    return null
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AppContextProvider>
          <Navigation/>
        </AppContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style='auto'/>
    </>
    
  );
}

export default App;
