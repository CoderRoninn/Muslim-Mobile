import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
// Runs the language setup when the app starts
import './src/localization';
import TabNavigator from './src/navigation/TabNavigator';

const App = () => {
  return (
    // Keeps content away from the notch and system bars
    <SafeAreaProvider>
      {/* White status bar icons */}
      <StatusBar style="light" />
      {/* Holds the navigation state of the whole app */}
      <NavigationContainer>
        {/* Bottom tab bar with all main screens */}
        <TabNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
