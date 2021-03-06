import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import colors from '../constants/colors'

export default function NumberContainer(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{props.children}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: colors.secondary,
    padding: 10,
    borderRadius: 10,
    marginVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
  },
  number: {
    color: colors.secondary,
    fontSize: 21,
  },
})
