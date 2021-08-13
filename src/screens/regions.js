import React from 'react';
import { ScrollView, Text, StyleSheet, TouchableOpacity, View, CheckBox, StatusBar } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import { marks } from '../../data/data';

export const Regions = ({ navigation }) => {
  const cities = [
    { title: 'Бишкек', children: [], active: true },
    { title: 'Чуй', children: ['Сокулкук', 'Кемин'], active: false },
    { title: 'Нарын', children: [], active: false },
    { title: 'Исык куль', children: [], active: false },
    { title: 'Талас', children: [], active: false },
    { title: 'Ош', children: ['Кара-суу', 'Ноокат'], active: false },
    { title: 'Жалал Абад', children: [], active: false },
    { title: 'Баткен', children: [], active: false },
  ]

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <MaterialIcons name="arrow-back-ios" size={24} color="black" />
      </TouchableOpacity>
      <Text style={styles.head}>Регионы</Text>

      <ScrollView>
        {cities.map((city) => (
          <TouchableOpacity key={city.title} style={styles.check}>
            <Text>{city.title}</Text>
            {city.active
              ? <CheckBox value={city.active} />
              : <View></View>}
          </TouchableOpacity>
        ))}
        <View style={styles.button}>
          <TouchableOpacity>
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
  check: {
    flexDirection: 'row',
    paddingLeft: 15,
    marginVertical: 10,
    justifyContent: 'space-between'
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