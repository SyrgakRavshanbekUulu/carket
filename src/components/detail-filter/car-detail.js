import React from 'react'
import { Text, StyleSheet, Image, View, ScrollView } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';

export const CarDetails = (props) => {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{props.marka + props.model}</Text>

      <View style={styles.price}>
        <Text style={styles.priceDollar}>{props.priceDollar + '$'}</Text>
        <Text style={styles.priceSom}>{props.priceDollar * 84 + ' com'}</Text>
      </View>

      <Text>{props.place}</Text>
      <View style={styles.avatar}>
        <FontAwesome name="user-circle" size={16} color="#727272" style={{ marginRight: 10 }} />
        <Text style={styles.grayText}>{props.lastView + ' часа назад'}</Text>
      </View>
      <ScrollView horizontal>
        {props.image.map((i, index) => <Image source={i} style={styles.image} key={`${index}${i}`} />)}
      </ScrollView>
      <View style={styles.info}>
        <View>
          <Text style={styles.grayText}>762 091 км</Text>
          <Text style={styles.grayText}>2 л / 249 л.с / Бензин</Text>
          <Text style={styles.grayText}>Роботизированная</Text>
        </View>
        <View>
          <Text style={styles.grayText}>Полный привод</Text>
          <Text style={styles.grayText}>Седан</Text>
          <Text style={styles.grayText}>Черный</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 10,
    marginBottom: 30,
  },
  image: {
    width: 160,
    height: 110,
    marginHorizontal: 2
  },
  name: {
    fontSize: 16,
    lineHeight: 19,
    marginTop: 10,
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
  grayText: {
    color: '#636363',
  },
  avatar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  info: {
    marginTop: 8,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})