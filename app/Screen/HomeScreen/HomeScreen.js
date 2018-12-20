/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity
} from 'react-native';
import Note from '../../components/Note/Note';

type Props = {};
export default class HomeScreen extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      noteArray: [
        {
          date: '2019/07/07',
          note: 'Liburan'
        }
      ],
      noteText: ''
    };
  }

  deleteMethod = id => {
    let noteArray = this.state.noteArray;
    noteArray.splice(id, 1);
    this.setState({ noteArray });
  };

  addNote = () => {
    let noteArray = this.state.noteArray;
    let d = new Date();
    noteArray.push({
      date: d.getFullYear() + '/' + d.getMonth() + '/' + d.getDay(),
      note: this.state.noteText
    });
    this.setState({ noteArray, noteText: '' });
  };

  render() {
    let notes = this.state.noteArray.map((data, key) => {
      return (
        <Note
          key={key}
          keyVal={key}
          val={data}
          deleteMethod={this.deleteMethod}
        />
      );
    });
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.textHeader}>- Note -</Text>
        </View>
        <ScrollView style={styles.scrollContainer}>{notes}</ScrollView>
        <View style={styles.footer}>
          <View style={styles.footerContainer}>
            <TextInput
              onChangeText={noteText => this.setState({ noteText })}
              value={this.state.noteText}
              style={styles.textInput}
              placeholder="Write note here"
              placeholderTextColor="white"
              placeholderTextColor="#A6A6A6"
            />
            <TouchableOpacity style={styles.addButton} onPress={this.addNote}>
              <Text style={styles.addButtonText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    backgroundColor: '#51D15B',
    borderBottomColor: '#42A855',
    borderBottomWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: '#ddd'
  },
  textHeader: {
    color: 'white',
    fontSize: 18,
    padding: 15
  },
  scrollContainer: {
    flex: 1,
    marginBottom: 60
  },
  footer: {
    position: 'absolute',
    flex: 1,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10
  },
  footerContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#D3E0D7',
    paddingHorizontal: 10
  },
  textInput: {
    flex: 1,
    color: '#FFFFFF',
    padding: 15,
    color: '#A6A6A6'
  },
  addButton: {
    backgroundColor: '#51D15B',
    borderRadius: 5,
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  addButtonText: {
    color: 'white',
    fontWeight: 'bold'
  }
});
