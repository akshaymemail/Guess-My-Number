import { NativeBaseProvider } from 'native-base'
import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import Header from './components/Header'
import StartGame from './views/StartGame'
import Game from './views/Game'

export default function App() {
  const [selectedNumber, setSelectedNumber] = useState()
  const onStartGame = (selectedNumber) => {
    console.log(selectedNumber)
    setSelectedNumber(selectedNumber)
  }
  let content = <StartGame onGameStart={onStartGame} />
  if (selectedNumber) {
    content = <Game selectedNumber={selectedNumber} />
  }
  return (
    <NativeBaseProvider>
      <View style={styles.screen}>
        <Header />
        {content}
      </View>
    </NativeBaseProvider>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
})
