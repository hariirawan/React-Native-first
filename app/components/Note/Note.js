/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

type Props = {
  keyVal: number,
  deleteMethod?: any
};
export default class Note extends Component<Props> {
  render() {
    const { keyVal, deleteMethod, val } = this.props;
    return (
      <View key={keyVal} style={styles.note}>
        <Text style={styles.noteText}>{val.date}</Text>
        <Text style={styles.noteText}>{val.note}</Text>
        <TouchableOpacity
          onPress={deleteMethod.bind(this, keyVal)}
          style={styles.noteDelete}
        >
          <Text style={styles.noteDeleteText}>Delete</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  note: {
    position: 'relative',
    padding: 10,
    paddingRight: 100,
    margin: 4,
    borderTopWidth: 1,
    borderWidth: 1,
    borderColor: '#ededed',
    borderTopColor: '#ededed'
  },
  noteText: {},
  noteDelete: {
    position: 'absolute',
    right: 10,
    top: 10,
    bottom: 10,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E91E63',
    borderRadius: 5
  },
  noteDeleteText: {
    color: 'white'
  }
});
