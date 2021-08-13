import React from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import { CarDetails } from './car-detail'

export const CarsDetailBlock = (props) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={props.cars}
        keyExtractor={(car, index) => car.id}
        renderItem={(car) => <CarDetails {...car.item} />}
      />
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    width: '99%',
    alignItems: 'center',
    backgroundColor: 'white'
  },
})