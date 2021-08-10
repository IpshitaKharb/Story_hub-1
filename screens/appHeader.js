import * as React from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class AppHeader extends React.Component {
  render() {
    return (
      <View style={[styles.container]}>
        <Text style={styles.text}>STORY HUB</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    color: 'black',
    padding: 20,
    fontFamily: 'Viner Hand ITC',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'pink',
  },
  container: {
    flex: 1,

  },
})
