import React from 'react'
import { Image, StyleSheet, View, TouchableOpacity } from 'react-native'
import { EvilIcons } from '@expo/vector-icons'
import { FontAwesome } from '@expo/vector-icons'
import logo from '../../assets/logo.png'



export const Navbar = ({ toDetail }) => {

  return (
    <View style={styles.navbar}>
      <TouchableOpacity onPress={toDetail}>
        <EvilIcons name="navicon" size={24} color="black" />
      </TouchableOpacity>
      <Image source={logo} style={styles.logo} />
      <TouchableOpacity>
        <FontAwesome name="search" size={24} color="black" />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 13,
    paddingRight: 10,
    height: 50
  },
  logo: {
    width: 120,
    height: 20,
  },
})