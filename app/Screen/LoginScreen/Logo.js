/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { styles } from './Style.login';

type Props = {};
export default class Logo extends Component<Props> {
  render() {
    return (
      <View style={styles.containerLogo}>
        <Text style={styles.title}>Login</Text>
        <Text style={styles.subTitle}>Sign In Your Account</Text>
      </View>
    );
  }
}
