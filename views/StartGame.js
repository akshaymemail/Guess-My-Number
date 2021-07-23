import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native'
import Card from '../components/Card'
import NumberContainer from '../components/NumberContainer'
import colors from '../constants/colors'
import { Button, Input } from 'native-base'

export default function StartGame(props) {
  const [enteredText, setEnteredText] = useState(null)
  const [confirmed, setConfirmed] = useState(false)
  const [selectedNumber, setSelectedNumber] = useState()

  const handleTextInput = (text) => {
    setEnteredText(text.replace(/[^0-9]/g, ''))
  }

  const resetHandler = () => {
    setEnteredText('')
    setConfirmed(false)
  }

  const confirmHandler = () => {
    const chosenNumber = parseInt(enteredText)
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert('Invalid Number', 'Number should be number between 1 to 99', [
        { text: 'Okay', style: 'destructive', onPress: resetHandler },
      ])
      return
    }
    setConfirmed(true)
    setSelectedNumber(chosenNumber)
    setEnteredText(false)
    Keyboard.dismiss()
  }
  let confirmOutput = null
  if (confirmed) {
    confirmOutput = (
      <Card style={styles.selectedCard}>
        <Text style={{ textAlign: 'center' }}> You Selected </Text>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <Button
          variant="solid"
          colorScheme="secondary"
          onPress={() => props.onGameStart(selectedNumber)}
        >
          START GAME
        </Button>
      </Card>
    )
  }
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.screen}>
        <Card style={styles.inputContainer}>
          <Text style={styles.title}>Start Gme</Text>
          <Input
            variant="rounded"
            _light={{
              placeholderTextColor: 'blueGray.400',
            }}
            _dark={{
              placeholderTextColor: 'blueGray.50',
            }}
            placeholder="Enter a number"
            autoCompleteType="off"
            blurOnSubmit
            keyboardType="decimal-pad"
            autoCorrect={false}
            maxLength={2}
            value={enteredText}
            onChangeText={(e) => handleTextInput(e)}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.btn}>
              <Button
                onPress={resetHandler}
                variant="outline"
                colorScheme="primary"
              >
                Reset
              </Button>
            </View>
            <View style={styles.btn}>
              <Button
                onPress={confirmHandler}
                variant="outline"
                colorScheme="secondary"
              >
                Enter
              </Button>
            </View>
          </View>
        </Card>
        {confirmOutput}
      </View>
    </TouchableWithoutFeedback>
  )
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginVertical: 15,
  },
  inputContainer: {
    width: 400,
    maxWidth: '80%',
    alignItems: 'center',
  },
  buttonContainer: {
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingHorizontal: 15,
  },
  btn: {
    width: '40%',
  },
  textInput: {
    textAlign: 'center',
  },
  selectedCard: {
    padding: 30,
    marginVertical: 20,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
