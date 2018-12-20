import React, { Component, Fragment } from 'react';
import { Text, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './Style.login';

type Props = {};
export default class Form extends Component<Props> {
  render() {
    return (
      <Fragment>
        <TextInput
          style={styles.inputBox}
          placeholder="Email address"
          placeholderTextColor="#A6A6A6"
        />
        <TextInput
          style={styles.inputBox}
          placeholder="Password"
          placeholderTextColor="#A6A6A6"
          underlineColorAndroid="rgba(0,0,0,0)"
          secureTextEntry={true}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigate('Home')}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </Fragment>
    );
  }
}
