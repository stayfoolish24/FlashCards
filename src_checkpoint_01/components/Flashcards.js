import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import { reducer } from '../reducers/index'

import Logo from './Header/Logo'
import DeckScreen from './DeckScreen'
import NewCardScreen from './NewCardScreen'
import ReviewScreen from './ReviewScreen'

let store = createStore(reducer)

let headerOptions = {
  headerStyle: { backgroundColor: '#FFFFFF' },
  headerLeft: <Logo />
}

const AppNavigator = createStackNavigator({
  Home: { screen: DeckScreen, navigationOptions: headerOptions },
  Review: { screen: ReviewScreen, navigationOptions: headerOptions },
  CardCreation: {
    screen: NewCardScreen,
    path: 'createdCard/:deckID',
    navigationOptions: headerOptions
  }
})

const AppContainer = createAppContainer(AppNavigator)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    )
  }
}

export default App
