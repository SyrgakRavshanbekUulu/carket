import React from 'react';
import { Image, ScrollView, Text, StyleSheet, TextInput, TouchableOpacity, View, StatusBar } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import { marks } from '../../data/data';

export const MarkaSelect = ({ navigation }) => {
  const toModel = () => {
    navigation.navigate('Models')
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <MaterialIcons name="arrow-back-ios" size={24} color="black" />
      </TouchableOpacity>
      <Text style={styles.head}>Марки</Text>
      <TextInput
        style={styles.input}
        placeholder='Поиск марки' />
      <Text style={styles.popular}>Популярные</Text>
      <ScrollView>
        {marks.map(m => (
          <TouchableOpacity key={m.id} style={styles.markItem} onPress={toModel}>
            <View style={{ width: 35 }}>
              <Image source={m.logo} />
            </View>
            <Text style={{ marginLeft: 20 }}>{m.title}</Text>
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
    fontSize: 35,
    lineHeight: 41,
    marginTop: 30,
    marginBottom: 15
  },
  input: {
    borderRadius: 10,
    marginHorizontal: 10,
    paddingLeft: 10,
    height: 40,
    backgroundColor: '#F4F6F8'
  },
  popular: {
    fontWeight: '500',
    fontSize: 20,
    lineHeight: 23,
    marginVertical: 20,
  },
  markItem: {
    flexDirection: 'row',
    paddingLeft: 15
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