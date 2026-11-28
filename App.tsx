import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { COLORS } from './src/const/theme';
// Runs the language setup when the app starts
import './src/localization';
import Login from './src/screens/Login';

const App = () => {
  return (
    // Keeps content away from the notch and system bars
    <SafeAreaProvider>
      {/* White status bar icons */}
      <StatusBar style="light" />
      {/* Fills the area behind the rounded tab bar corners with the app color */}
      <View style={{ flex: 1, backgroundColor: COLORS.background }}>
        {/* Holds the navigation state of the whole app */}
        <NavigationContainer>
          {/* Login screen is the first screen while we test Google login */}
          <Login />
        </NavigationContainer>
      </View>
    </SafeAreaProvider>
  );
};

export default App;
