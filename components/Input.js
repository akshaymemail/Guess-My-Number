import React from 'react'
import { StyleSheet, TextInput } from 'react-native'
import { Input } from 'native-base'

export default function Inputs(props) {
  return (
    <>
      <Input
        {...props}
        variant="rounded"
        placeholder="Enter a number"
        _light={{
          placeholderTextColor: 'blueGray.400',
        }}
        _dark={{
          placeholderTextColor: 'blueGray.50',
        }}
      />
    </>
  )
}
