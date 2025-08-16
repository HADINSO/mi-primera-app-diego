import React, { useState } from "react";
import { View, Alert } from "react-native";
import { TextInput, Button, Text, Card, Avatar } from "react-native-paper";
import usuarios from "../assets/usuarios.json";

export default function Registro() {
  const [email, setEmail] = useState("");
  const [nombre, setNombre] = useState("");
  const [clave, setClave] = useState("");

  const registrar = () => {
    if (!nombre || !email || !clave) {
      Alert.alert("Error", "Todos los campos son obligatorios");
      return;
    }

    const existe = usuarios.find((u) => u.email === email);
    if (existe) {
      Alert.alert("Error", "El usuario ya existe");
    } else {
      Alert.alert("Éxito", `Usuario ${nombre} creado con éxito`);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#F5F6FA" }}>
      <Card
        style={{
          width: "90%",
          padding: 20,
          borderRadius: 20,
          elevation: 5,
          backgroundColor: "white",
        }}
      >
        <View style={{ alignItems: "center", marginBottom: 20 }}>
          <Avatar.Icon size={70} icon="account-plus" style={{ backgroundColor: "#2196F3" }} />
          <Text variant="headlineMedium" style={{ marginTop: 10, fontWeight: "bold", color: "#2196F3" }}>
            Registro de Usuario
          </Text>
        </View>

        <TextInput
          label="Nombre"
          value={nombre}
          onChangeText={setNombre}
          style={{ marginBottom: 15 }}
          mode="outlined"
        />
        <TextInput
          label="Correo"
          value={email}
          onChangeText={setEmail}
          style={{ marginBottom: 15 }}
          mode="outlined"
        />
        <TextInput
          label="Contraseña"
          value={clave}
          onChangeText={setClave}
          secureTextEntry
          style={{ marginBottom: 20 }}
          mode="outlined"
        />

        <Button
          mode="contained"
          onPress={registrar}
          style={{ paddingVertical: 5, borderRadius: 10, backgroundColor: "#4CAF50" }}
        >
          Registrarse
        </Button>
      </Card>
    </View>
  );
}
