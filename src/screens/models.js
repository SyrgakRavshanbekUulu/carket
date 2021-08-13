import React from 'react';
import { ScrollView, Text, StyleSheet, TouchableOpacity, View, StatusBar } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import { marks } from '../../data/data';

export const Models = ({ navigation }) => {
  const model = ['323', 'js', '500', 'demio', '100', 'odisey', 'fit']

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <MaterialIcons name="arrow-back-ios" size={24} color="black" />
      </TouchableOpacity>
      <Text style={styles.head}>Модели Mazda</Text>

      <ScrollView style={{ height: '80%' }}>
        <Text style={styles.all}>Выбрать все</Text>
        {model.map(m => (
          <TouchableOpacity key={m} style={styles.markItem}>
            <Text>{m}</Text>
          </TouchableOpacity>
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
  all: {
    fontWeight: '500',
    fontSize: 18,
    lineHeight: 21,
    paddingLeft: 15,
    marginVertical: 10,
  },
  markItem: {
    flexDirection: 'row',
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