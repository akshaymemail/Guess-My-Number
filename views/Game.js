import React, { useState, useRef, useEffect } from 'react'
import { StyleSheet, Text, View, Alert } from 'react-native'
import Card from '../components/Card'
import NumberContainer from '../components/NumberContainer'
import { Button } from 'native-base'

const generateNumberBetween = (min, max, exclude) => {
  min = Math.ceil(min)
  max = Math.ceil(max)
  const randomNumber = Math.floor(Math.random() * (max - min)) + min
  if (randomNumber === exclude) {
    return generateNumberBetween(min, max, exclude)
  } else {
    return randomNumber
  }
}

export default function Game(props) {
  console.log(props.selectedNumber)
  const [currentGuess, setCurrentGuess] = useState(
    generateNumberBetween(1, 100, props.selectedNumber)
  )
  const currentLow = useRef(1)
  const currentHigh = useRef(100)

  const nextGuessHandler = (direction) => {
    if (
      (direction === 'lower' && currentGuess < props.selectedNumber) ||
      (direction === 'greater' && currentGuess > props.selectedNumber)
    ) {
      Alert.alert('Error', "Don't lie! you know this is the wrong number...", [
        { text: 'Sorry', style: 'cancel' },
      ])
      return
    }
    if (direction === 'lower') {
      currentHigh.current = currentGuess
    } else {
      currentLow.current = currentGuess
    }
    const nextNumber = generateNumberBetween(
      currentLow.current + 1,
      currentHigh.current - 1,
      currentGuess
    )
    console.log('final' + nextNumber)
    setCurrentGuess(nextNumber)
  }
  return (
    <View>
      <Card style={styles.card}>
        <Text style={{ textAlign: 'center' }}> Opponents Choice </Text>
        <NumberContainer>{currentGuess}</NumberContainer>
        <View style={styles.buttonContainer}>
          <View style={styles.btn}>
            <Button
              onPress={() => nextGuessHandler('lower')}
              variant="outline"
              colorScheme="primary"
            >
              LESS
            </Button>
          </View>
          <View style={styles.btn}>
            <Button
              onPress={() => nextGuessHandler('greater')}
              variant="outline"
              colorScheme="secondary"
            >
              GREATER
            </Button>
          </View>
        </View>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingHorizontal: 15,
  },
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
})
