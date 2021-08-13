import React from 'react'
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import logo from '../../../assets/logo.png'

export const NavbarDF = ({ toMain }) => {
  return (
    <View style={styles.navbar}>
      <TouchableOpacity onPress={toMain}>
        <MaterialIcons name="arrow-back-ios" size={24} color="black" />
      </TouchableOpacity>
      <Image source={logo} style={styles.logo} />
      <View></View>
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
    height: 40,
  },
  logo: {
    width: 120,
    height: 20,
  }
})