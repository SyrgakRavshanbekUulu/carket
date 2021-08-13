import React from 'react'
import { DetailFilter } from './src/screens/detail-filter'
import { Main } from './src/screens/main'
import { MarkaSelect } from './src/screens/marka-select'
import { Models } from './src/screens/models'
import { Regions } from './src/screens/regions'
import { Setting } from './src/screens/setting'

import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

const Stack = createStackNavigator()

export default function () {
  return <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
      initialRouteName='Main'
    >
      <Stack.Screen
        name='Main'
        component={Main}
      />
      <Stack.Screen
        name='DetailFilter'
        component={DetailFilter}
      />
      <Stack.Screen
        name='Setting'
        component={Setting}
      />
      <Stack.Screen
        name='Regions'
        component={Regions}
      />
      <Stack.Screen
        name='MarkaSelect'
        component={MarkaSelect}
      />
      <Stack.Screen
        name='Models'
        component={Models}
      />

    </Stack.Navigator>
  </NavigationContainer>
}