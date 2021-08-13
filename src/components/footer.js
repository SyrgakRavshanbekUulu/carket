import React from 'react'
import { TouchableOpacity, StyleSheet, Text, View, Alert } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
export const Footer = ({ navigation }) => {
  const onClick = () => {
    Alert.alert('Этот блок еще не готов')
  }

  return (
    <View style={styles.box}>
      <TouchableOpacity style={styles.items}>
        <AntDesign name="home" size={18} color="red" />
        <Text style={styles.redText}>Главная</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.items} onPress={onClick}>
        <Ionicons name="notifications-outline" size={18} color="black" />
        <Text style={styles.text}>Уведомления</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.items} onPress={onClick}>
        <Ionicons name="add-circle-outline" size={18} color="red" />
        <Text style={styles.redText}>Добавить</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.items} onPress={onClick}>
        <Ionicons name="heart-outline" size={18} color="black" />
        <Text style={styles.text}>Избранные</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.items} onPress={onClick}>
        <AntDesign name="user" size={18} color="black" />
        <Text style={styles.text}>Профиль</Text>
      </TouchableOpacity>
    </View>

  )
}

const styles = StyleSheet.create({
  items: {
    alignItems: 'center',
    width: '20%'
  },
  box: {
    flexDirection: 'row',
    backgroundColor: 'white',
    width: '100%',
    alignItems: 'center',
    height: 39
  },
  text: {
    fontSize: 8,
    lineHeight: 12
  },
  redText: {
    fontSize: 8,
    lineHeight: 12,
    color: 'red'
  }
})