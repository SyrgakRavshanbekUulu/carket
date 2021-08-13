import React from 'react'
import { StyleSheet, Image, Text, ScrollView, TouchableOpacity } from 'react-native'
import blackCabriolet from '../../assets/cabriolets/black.png'
import redCabriolet from '../../assets/cabriolets/red.png'
import blueCabriolet from '../../assets/cabriolets/blue.png'
import greenCabriolet from '../../assets/cabriolets/green.png'
import yellowCabriolet from '../../assets/cabriolets/yellow.png'

export const CabrioletBlock = () => {
  return (
    <ScrollView horizontal={true} style={styles.container}>
      <TouchableOpacity style={styles.cabrioletBlock}>
        <Image source={blackCabriolet} style={styles.image} />
        <Text style={styles.title}>Кабриолет</Text>
      </TouchableOpacity >
      <TouchableOpacity style={styles.cabrioletBlock}>
        <Image source={redCabriolet} style={styles.image} />
        <Text style={styles.title}>Кабриолет</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.cabrioletBlock}>
        <Image source={greenCabriolet} style={styles.image} />
        <Text style={styles.title}>Кабриолет</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.cabrioletBlock}>
        <Image source={yellowCabriolet} style={styles.image} />
        <Text style={styles.title}>Кабриолет</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.cabrioletBlock}>
        <Image source={blueCabriolet} style={styles.image} />
        <Text style={styles.title}>Кабриолет</Text>
      </TouchableOpacity>

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 10
  },
  cabrioletBlock: {
    width: 120,
    marginRight: 20,
    height: 100
  },
  image: {
    width: 120,
    height: 68,
  },
  title: {
    marginTop: 10,
    textAlign: 'center'
  }
})