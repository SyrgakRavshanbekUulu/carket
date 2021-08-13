import React from 'react'
import { Text, StyleSheet, TouchableOpacity, Image, View } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';

export const CarCard = (props) => {
  return (
    <TouchableOpacity style={styles.card}>
      <Image source={props.image[0]} style={styles.image} />
      <Text style={styles.name}>{props.marka + props.model}</Text>
      <View style={styles.price}>
        <Text style={styles.priceDollar}>{props.priceDollar + '$'}</Text>
        <Text style={styles.priceSom}>{props.priceDollar * 84 + ' com'}</Text>
      </View>
      <Text>{props.place}</Text>
      <View style={styles.avatar}>
        <FontAwesome name="user-circle" size={16} color="#727272" />
        <Text style={styles.lastView}>{props.lastView + ' часа назад'}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 10,
    marginBottom: 30
  },
  image: {
    width: 160,
    height: 110,
  },
  name: {
    fontSize: 10,
    lineHeight: 12,
    marginTop: 15,
  },
  price: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10
  },
  priceSom: {
    fontSize: 12,
    lineHeight: 14,
    color: '#636363',
    marginLeft: 15
  },
  priceDollar: {
    fontWeight: '500',
    fontSize: 18,
    lineHeight: 21
  },
  lastView: {
    color: '#636363',
    paddingLeft: 10
  },
  avatar: {
    marginTop: 5,
    flexDirection: 'row',
  }
})