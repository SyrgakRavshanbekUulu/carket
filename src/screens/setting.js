import React from 'react';
import { ScrollView, Text, StyleSheet, TouchableOpacity, View, TextInput, StatusBar } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import { marks } from '../../data/data';

export const Setting = ({ navigation }) => {
  const settings = ['Год выпуска', 'Цена, сом', 'Коробка ', 'Двигатель', 'Цвет', 'Расположение руля']

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <MaterialIcons name="arrow-back-ios" size={24} color="black" />
      </TouchableOpacity>
      <Text style={styles.head}>Параметры</Text>

      <ScrollView style={{ height: '85%' }}>
        {settings.map(s => (
          <View key={s} style={styles.markItem}>
            <Text style={styles.title}>{s}</Text>
            <TextInput style={styles.input} />
          </View>
        ))}
        <View style={styles.button}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text>Показать {marks.length} предложений</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginTop: StatusBar.currentHeight
  },
  head: {
    fontWeight: '500',
    fontSize: 20,
    lineHeight: 23,
    marginTop: 30,
    marginBottom: 15
  },
  title: {
    fontSize: 10,
    lineHeight: 12,
    paddingLeft: 15,
    marginVertical: 10,
    color: '#9C9C9C'
  },
  input: {
    width: 200,
    height: 30,
    borderBottomColor: '#9C9C9C',
    borderBottomWidth: 1,
    marginLeft: 25,
  },
  markItem: {
    paddingLeft: 15,
    marginVertical: 10
  },
  button: {
    width: 300,
    height: 50,
    backgroundColor: '#EA4F3D',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginHorizontal: 20,
    marginVertical: 20
  }

})