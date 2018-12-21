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
  static navigationOptions = {
    header: null
  };

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
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.textHeader}>- NOTE BUG -</Text>
        </View>
        <ScrollView style={styles.scrollContainer}>{notes}</ScrollView>
        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => navigate('FormNote')}
          >
            <Text style={styles.addButtonText}>+</Text>
          </TouchableOpacity>
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
    borderBottomColor: '##42A855',
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
  addButton: {
    position: 'absolute',
    right: 10,
    bottom: 10,
    backgroundColor: '#51D15B',
    borderRadius: 50,
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
