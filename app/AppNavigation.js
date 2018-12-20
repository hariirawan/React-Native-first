/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './Screen/HomeScreen/HomeScreen';
import DetailScreen from './Screen/DetailScreen/DetailScreen';
import LoginScreen from './Screen/LoginScreen/LoginScreen';

const AppNavigation = createStackNavigator(
  {
    Login: LoginScreen,
    Home: {
      screen: HomeScreen,
      navigationOptions: () => ({
        header: null
      })
    },
    Details: DetailScreen
  },
  {
    initialRouteName: 'Login'
  }
);

export default createAppContainer(AppNavigation);
