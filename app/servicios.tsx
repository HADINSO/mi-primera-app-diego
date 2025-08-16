import React from "react";
import { View, FlatList, TouchableOpacity } from "react-native";
import { Card, Text, Avatar } from "react-native-paper";

const servicios = [
  { id: 1, titulo: "Transporte", icon: "bus" },
  { id: 2, titulo: "Recreación", icon: "soccer" },
  { id: 3, titulo: "Asesoría", icon: "account-tie" },
  { id: 4, titulo: "Mantenimiento", icon: "tools" },
];

export default function Servicios() {
  return (
    <View style={{ flex: 1, padding: 15, backgroundColor: "#f9f9f9" }}>
      <Text variant="titleLarge" style={{ marginBottom: 15, fontWeight: "bold" }}>
        Nuestros Servicios
      </Text>
      <FlatList
        data={servicios}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => console.log(item.titulo)}>
            <Card style={{ marginBottom: 12, borderRadius: 12, elevation: 3 }}>
              <Card.Title
                title={item.titulo}
                titleVariant="titleMedium"
                left={(props) => <Avatar.Icon {...props} icon={item.icon} />}
              />
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
