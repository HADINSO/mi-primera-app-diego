import React, { useState } from "react";
import { Alert, View } from "react-native";
import { TextInput, Button, Text, Card, Avatar } from "react-native-paper";
import usuarios from "../assets/usuarios.json";

export default function Login() {
  const [email, setEmail] = useState("");
  const [clave, setClave] = useState("");

  const validarLogin = () => {
    if (!email || !clave) {
      Alert.alert("Error", "Por favor, complete todos los campos");
      return;
    }
    const user = usuarios.find((u) => u.email === email);
    if (!user) {
      Alert.alert("Error", "El usuario no existe");
      return;
    }
    if (user.clave !== clave) {
      Alert.alert("Error", "Datos de acceso incorrectos");
      return;
    }
    Alert.alert("Éxito", `Bienvenido ${user.nombre}`);
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
          <Avatar.Icon size={70} icon="lock" style={{ backgroundColor: "#FF4081" }} />
          <Text variant="headlineMedium" style={{ marginTop: 10, fontWeight: "bold", color: "#FF4081" }}>
            Iniciar Sesión
          </Text>
        </View>

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
          onPress={validarLogin}
          style={{ paddingVertical: 5, borderRadius: 10, backgroundColor: "#4CAF50" }}
        >
          Entrar
        </Button>

        <Button
          mode="text"
          onPress={() => Alert.alert("Info", "Función de registro aún no implementada")}
          style={{ marginTop: 10 }}
          textColor="#2196F3"
        >
          ¿No tienes cuenta? Regístrate
        </Button>
      </Card>
    </View>
  );
}
