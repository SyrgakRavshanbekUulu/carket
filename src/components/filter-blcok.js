import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export const FilterBlock = ({ toSetting }) => {
  return (
    <View style={styles.container}>
      <Text>Параметры</Text>
      <TouchableOpacity onPress={toSetting}>
        <Ionicons name="options-outline" size={24} color="black" />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flexDirection: 'row',
    marginHorizontal: 10,
    height: 50,
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    alignItems: 'center',
    borderRadius: 10,
    borderColor: '#DFDFDF',
    borderWidth: 1,
  },
})