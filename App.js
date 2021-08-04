import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View,reactFragment, TextInput } from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';          
import AppText from "./app/components/AppText";
import AppButton from './app/components/AppButton';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import ListItem from './app/components/ListItem';
import MessagesScreen from './app/screens/MessagesScreen';
import Screen from './app/components/Screen';
import Icon from './app/components/Icon';
import AccountScreen from './app/screens/AccountScreen';
import Card from './app/components/Card';
import ListingScreen from './app/screens/ListingScreen';
import AppTextInput from './app/components/AppTextInput';
import AppPicker from './app/components/AppPicker';
import LoginScreen from './app/screens/LoginScreen';
import ListingEditScreen from './app/screens/ListingEditScreen';

export default function App() {
 
 
  return (
 <LoginScreen/>
  );
}

