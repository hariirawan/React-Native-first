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
import FormNote from './components/Note/FormNote';

const AppNavigation = createStackNavigator(
  {
    Login: LoginScreen,
    Home: HomeScreen,
    Details: DetailScreen,
    FormNote: FormNote
  },
  {
    initialRouteName: 'Login'
  }
);

export default createAppContainer(AppNavigation);
