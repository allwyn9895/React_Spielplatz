import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {globalStyles} from '../styles/global'

export default function ReviewDetails({ route, navigation }) {
    const { title } = route.params;
    const { body } = route.params;
  
    return (
      <View style={globalStyles.container}>
        <Text>{title}</Text>
        <Text>{body}</Text>
      </View>
    );
  }
