import React, { useState } from 'react';
import { ScrollView, StyleSheet, View, StatusBar } from 'react-native'
import { CabrioletBlock } from '../components/cabriolet-block'
import { CategoryBlock } from '../components/category-block';
import { FilterBlock } from '../components/filter-blcok';
import { CarsBlock } from '../components/cars-block';
import { Footer } from '../components/footer';
import { Navbar } from '../components/navbar';
import { category } from '../../data/data';


export const Main = ({ navigation }) => {
  const toDetailScreen = () => {
    navigation.navigate('DetailFilter')
  }
  const toSetting = () => {
    navigation.navigate('Setting')
  }
  const [renderCars, setRenderCars] = useState([])
  return (
    <View style={styles.container}>
      <Navbar toDetail={toDetailScreen} />
      <ScrollView style={styles.scroll}>
        <CategoryBlock categories={category} />
        <CabrioletBlock />
        <FilterBlock toSetting={toSetting} />
        <CarsBlock />
      </ScrollView>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    marginTop: StatusBar.currentHeight,
  },
  scroll: {
    height: '86%'
  }
})