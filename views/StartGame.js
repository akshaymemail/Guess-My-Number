import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native'
import Card from '../components/Card'
import Input from '../components/Input'
import colors from '../constants/colors'

export default function StartGame() {
  const [enteredText, setEnteredText] = useState('')
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
    if (chosenNumber === NaN || chosenNumber <= 0 || chosenNumber > 99) {
      return
    }
    setConfirmed(true)
    setSelectedNumber(chosenNumber)
    setEnteredText(false)
  }
  let confirmOutput = null
  if (confirmed) {
    confirmOutput = <Text>Confirmed Number : {selectedNumber}</Text>
  }
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.screen}>
        <Text style={styles.title}>Start Gme</Text>
        <Card style={styles.inputContainer}>
          <Input
            style={styles.textInput}
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
                title="Reset"
                color={colors.secondary}
                onPress={resetHandler}
              />
            </View>
            <View style={styles.btn}>
              <Button
                title="Enter"
                color={colors.primary}
                onPress={confirmHandler}
              />
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
})
