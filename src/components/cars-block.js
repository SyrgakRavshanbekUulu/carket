import React from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import { cars } from '../../data/data'
import { CarCard } from './car-card'


export const CarsBlock = (props) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={cars}
        numColumns={2}
        keyExtractor={(car, index) => car.id}
        renderItem={(car) => <CarCard {...car.item} />}
      />
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    width: '99%',
    alignItems: 'center',
  },
})