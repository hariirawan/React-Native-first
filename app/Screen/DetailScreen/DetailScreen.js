/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Text, View } from 'react-native';

type Props = {};
export default class DetailScreen extends Component<Props> {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Detail Screeen</Text>
      </View>
    );
  }
}
