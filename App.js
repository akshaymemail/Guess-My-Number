import { NativeBaseProvider } from 'native-base'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import Header from './components/Header'
import StartGame from './views/StartGame'

export default function App() {
  return (
    <NativeBaseProvider>
      <View style={styles.screen}>
        <Header />
        <StartGame />
      </View>
    </NativeBaseProvider>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
})
