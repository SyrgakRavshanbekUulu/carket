import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export const FilterTypeBlock = ({ toSetting, toMarkaSelect, toRegion }) => {

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.items} onPress={toSetting}>
        <Ionicons name="options-outline" size={20} color="black" />
        <Text style={styles.text}>Параметры</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.items} onPress={toMarkaSelect}>
        <Text style={styles.text}>Марка модель</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.items} onPress={toRegion}>
        <Text style={styles.text}>Любой регион</Text>
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F2F1F6',
    marginHorizontal: '2.5%',
    marginTop: 13,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  items: {
    flexDirection: 'row',
    height: 40,
    alignItems: 'center',
    borderRadius: 10,
    width: 110,
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  text: {
    fontSize: 10,
    lineHeight: 14,
    marginLeft: 7
  },
})