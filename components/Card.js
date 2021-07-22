import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Card(props) {
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  )
}

const styles = StyleSheet.create({
  card: {
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.3,
    elevation: 6,
    backgroundColor: '#f1f1f1',
    paddingTop: 10,
    paddingBottom: 10,
  },
})
