import React from 'react';
import { View } from 'react-native';
import { Text, Button } from 'react-native-paper';

export default function Home() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text variant="titleLarge">¡Hola mundo!</Text>
      <Button mode="contained" onPress={() => console.log("Presionado")}>
        Presióname
      </Button>
    </View>
  );
}
