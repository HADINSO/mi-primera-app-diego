import React, { useState } from "react";
import { View, FlatList } from "react-native";
import { Card, Text, TextInput, Avatar } from "react-native-paper";
import usuarios from "../assets/usuarios.json";

export default function Perfil() {
  const [texto, setTexto] = useState("");

  const filtrados = usuarios.filter((u) =>
    u.nombre.toLowerCase().includes(texto.toLowerCase())
  );

  return (
    <View style={{ flex: 1, padding: 15, backgroundColor: "#F5F6FA" }}>
      <TextInput
        label="🔍 Buscar usuario"
        value={texto}
        onChangeText={setTexto}
        mode="outlined"
        style={{ marginBottom: 15 }}
      />

      <FlatList
        data={filtrados}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Card
            style={{
              marginBottom: 12,
              borderRadius: 15,
              elevation: 3,
              backgroundColor: "white",
            }}
          >
            <Card.Title
              title={item.nombre}
              subtitle={item.rol}
              titleStyle={{ fontWeight: "bold", fontSize: 18 }}
              subtitleStyle={{ color: "#757575" }}
              left={(props) => (
                <Avatar.Text
                  {...props}
                  label={item.nombre[0]}
                  style={{ backgroundColor: "#4CAF50" }}
                  color="white"
                />
              )}
            />
            <Card.Content>
              <Text>Email: {item.email}</Text>
              <Text>Tel: {item.telefono}</Text>
            </Card.Content>
          </Card>
        )}
      />
    </View>
  );
}
