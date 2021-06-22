import React from 'react';

import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeView from './views/Home';
import ProductListView from './views/ProductList';
import UserCreateView from './views/UserCreate';

const Stack = createStackNavigator();

export default function Routes() {    
    return (
        <NavigationContainer>
            <StatusBar style="auto" />
            <Stack.Navigator>
                <Stack.Screen
                    name="Início"
                    component={HomeView}
                />
                <Stack.Screen
                    name="Lista de Produtos"
                    component={ProductListView}
                />
                <Stack.Screen
                    name="Cadastrar usuário"
                    component={UserCreateView}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}