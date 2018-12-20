/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View } from 'react-native';
import { styles } from './Style.login';
import Logo from './Logo';
import Form from './Form';

type Props = {};
export default class LoginScreen extends Component<Props> {
  static navigationOptions = {
    header: null
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <Logo />
          <Form navigate={navigate} />
        </View>
      </View>
    );
  }
}
