import React from 'react'
import * as $ from 'react-native'
import AppHeader from './screens/appHeader'
import ReadScreen from './screens/readScreen'
import WriteScreen from './screens/writeScreen'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'

export default class App extends React.Component {
  render() {
    return (
      <$.View style={[styles.container]}>
        <AppContainer />
      </$.View>
    )
  }
}

const TabNavigator = createBottomTabNavigator(
  {
    WriteScreen: { screen: WriteScreen },
    ReadScreen: { screen: ReadScreen },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: () => {
        const routeName = navigation.state.routeName
        console.log(routeName)
        if (routeName === 'ReadScreen') {
          return (
            <$.View style={[styles.container]}>
              <$.Image
                source={require('./screens/read.png')}
                style={{ width: 40, height: 40 }}
              />
            </$.View>
          )
        } else if (routeName === 'WriteScreen') {
          return (
            <$.View style={[styles.container]}>
              <$.Image
                source={require('./screens/write.png')}
                style={{ width: 47, height: 47 }}
              />
            </$.View>
          )
        }
      },
    }),
  },
)

const AppContainer = createAppContainer(TabNavigator)

const styles = $.StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', 
  },
})
