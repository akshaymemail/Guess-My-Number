import React from 'react'
import { StyleSheet, View } from 'react-native'
import Header from './components/Header'
import StartGame from './views/StartGame'

export default function App() {
  return (
    <View style={styles.screen}>
      <Header />
      <StartGame />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
})
