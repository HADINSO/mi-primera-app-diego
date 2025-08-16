import React from "react";
import { View } from "react-native";
import { Avatar, Text, Card } from "react-native-paper";

export default function Autor() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#F5F6FA" }}>
      <Card
        style={{
          alignItems: "center",
          padding: 20,
          borderRadius: 20,
          elevation: 4,
          backgroundColor: "white",
          width: "85%",
        }}
      >
        <Avatar.Image
          size={120}
          source={{ uri: "https://i.pravatar.cc/300" }}
          style={{ marginBottom: 15 }}
        />
        <Text variant="headlineMedium" style={{ fontWeight: "bold", color: "#4CAF50" }}>
          Diego Andres Murillo Palacios
        </Text>
        <Text style={{ marginTop: 5, color: "#616161" }}>📍 De Quibdó, Chocó</Text>
        <Text style={{ marginTop: 5, color: "#424242", textAlign: "center" }}>
          🎓 Estudiante de Ingeniería de Telecomunicaciones e Informática
        </Text>
      </Card>
    </View>
  );
}
