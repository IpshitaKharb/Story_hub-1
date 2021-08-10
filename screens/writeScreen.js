import * as React from 'react'
import { View, TextInput, StyleSheet, Text } from 'react-native'
import AppHeader from './appHeader'
import db from '../config'
import firebase from 'firebase' 
import { TouchableOpacity } from 'react-native'

export default class WriteScreen extends React.Component {
  render() {
    return (
      <View style={[styles.container]}>
        <AppHeader />
        <TextInput
          style={styles.title}
          placeholder="Story Title"
          placeholderTextColor="grey"
        />
        <TextInput
          style={styles.author}
          placeholder="Author"
          placeholderTextColor="grey"
        />
        <TextInput
          style={styles.storyText}
          placeholder="Write your story"
          placeholderTextColor="grey"
        />

        <TouchableOpacity
          style={styles.submitButton}
          onPress={this.submitButton}
        >
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  author: {
    height: 40,
    borderWidth: 2,
    margin: 10,
    padding: 6,
    borderRadius: 30,
  },
  storyText: {
    height: 250,
    borderWidth: 2,
    margin: 9,
    padding: 6,
    borderRadius: 30,
  },
  title: {
    height: 40,
    borderWidth: 2,
    marginTop: 40,
    margin: 10,
    color: 'black',
    padding: 6,
    borderRadius: 30,
  },
  container: {
    flex: 1,

  },
  submitButton: {
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: 'pink',
    width: 80,
    height: 40,
    color: 'black',
    borderRadius: 30,
  },
})
