import React from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'

export const CategoryBlock = (props) => {
  const { categories } = props
  return (
    <ScrollView horizontal style={styles.container}>
      {
        categories.map(c => (
          <TouchableOpacity key={c.id} style={styles.categoryItem}>
            <Text style={styles.text}>{c.title}</Text>
            <View style={styles.line}></View>
          </TouchableOpacity>
        ))

      }
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F4F6F8',
    marginLeft: 10,
    height: 40,
    marginTop: 10,
  },
  categoryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    color: 'black',
    backgroundColor: '#F4F6F8',
    marginRight: 5,
    borderRadius: 9,
  },
  text: {
    fontSize: 14,
    lineHeight: 16,
    paddingRight: 16,
    paddingLeft: 16,
  },
  categoryItemActive: {
    backgroundColor: '#F4F6F8',
  },
  line: {
    height: '60%',
    width: 1,
    backgroundColor: '#DFDFDF'
  }
})