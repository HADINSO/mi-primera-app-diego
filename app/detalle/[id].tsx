import React from "react";
import { View, Image } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { Text } from "react-native-paper";
import productos from "../../assets/productos.json";

export default function Detalle() {
  const { id } = useLocalSearchParams();
  const producto = productos.find((p) => p.id.toString() === id);

  if (!producto) return <Text>No encontrado</Text>;

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text variant="titleLarge">{producto.titulo}</Text>
      <Image
        source={{ uri: producto.imagen }}
        style={{ width: "100%", height: 200, marginVertical: 20 }}
      />
      <Text>{producto.descripcion}</Text>
    </View>
  );
}
