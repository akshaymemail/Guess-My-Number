import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import colors from '../constants/colors'

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>Guess My Number</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 36,
    width: '100%',
    height: 120,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    color: '#000000',
    fontSize: 40,
    fontWeight: 'bold',
  },
})
