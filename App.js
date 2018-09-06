import React from 'react';
import { createStackNavigator } from 'react-navigation';
import LanguageSelectionScreen from './pages/LanguageSelectionScreen';
import ContentScreen from './pages/ContentScreen';
const App = createStackNavigator({
  LanguageSelectionScreen: { screen: LanguageSelectionScreen, navigationOptions: { header: null } },
  ContentScreen: { screen: ContentScreen },
});
export default App;
