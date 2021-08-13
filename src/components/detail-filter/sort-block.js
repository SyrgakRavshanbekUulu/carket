import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';

export const SortBlock = (props) => {
  const { size } = props

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{size} предложений</Text>
      <TouchableOpacity style={styles.sort} onPress={() => Alert.alert('Этот блок еще не готов')}>
        <Text style={styles.textSort}>По актуальности </Text>
        <FontAwesome5 name="sort" size={20} color="black" />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F2F1F6',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginVertical: 15
  },
  text: {
    color: '#9C9C9C',
    fontSize: 12,
    lineHeight: 14
  },
  textSort: {
    color: '#000',
    fontSize: 12,
    lineHeight: 14
  },
  sort: {
    flexDirection: 'row',
    alignItems: 'center',
  },
})