import React from 'react'
import { View, ScrollView, StyleSheet, StatusBar } from 'react-native'
import { cars, condition } from '../../data/data'
import { CategoryBlock } from '../components/category-block'
import { FilterTypeBlock } from '../components/detail-filter/filter-type-block'
import { NavbarDF } from '../components/detail-filter/navbar-df'
import { ResultFilter } from '../components/detail-filter/result-filter'
import { CarsDetailBlock } from '../components/detail-filter/cars-detail-block'
import { SortBlock } from '../components/detail-filter/sort-block'
import { Footer } from '../components/footer'

export const DetailFilter = ({ navigation }) => {
  const toMain = () => {
    navigation.navigate('Main')
  }
  const toMarkaSelect = () => {
    navigation.navigate('MarkaSelect')
  }
  const toSetting = () => {
    navigation.navigate('Setting')
  }
  const toRegion = () => {
    navigation.navigate('Regions')
  }
  return (
    <View style={styles.container}>
      <NavbarDF toMain={toMain} />
      <ScrollView style={styles.scroll}>
        <CategoryBlock categories={condition} />
        <ResultFilter marka={'Audi'} model={'100'} />
        <FilterTypeBlock toSetting={toSetting} toRegion={toRegion} toMarkaSelect={toMarkaSelect} />
        <SortBlock size={20} />
        <CarsDetailBlock cars={cars} />
      </ScrollView>
      <Footer />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F2F1F6',
    marginTop: StatusBar.currentHeight
  },
  scroll: {
    height: '86%'
  }
})