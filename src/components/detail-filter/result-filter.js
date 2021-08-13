import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { Fontisto } from '@expo/vector-icons';

export const ResultFilter = (props) => {
  const { marka, model } = props

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}>Marka</Text>
        <TouchableOpacity>
          <Fontisto name="close" size={16} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.line}></View>

      <View style={styles.box}>
        <Text style={styles.text}>Model</Text>
        <TouchableOpacity>
          <Fontisto name="close" size={16} color="black" />
        </TouchableOpacity>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: '95%',
    backgroundColor: '#FFFFFF',
    marginHorizontal: '2.5%',
    marginTop: 13,
    justifyContent: 'center',
    borderRadius: 5
  },
  text: {
    fontSize: 8,
    lineHeight: 9,
    color: '#9C9C9C'
  },
  box: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 40,
    alignItems: 'center',
    paddingHorizontal: 20
  },
  line: {
    width: '90%',
    height: 1,
    backgroundColor: '#DFDFDF',
    marginLeft: '5%'
  }
})