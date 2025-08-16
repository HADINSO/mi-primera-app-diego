import React, { useState } from "react";
import { View, FlatList, Image, TouchableOpacity } from "react-native";
import { Card, Text, Button, TextInput } from "react-native-paper";
import productos from "../assets/productos.json";
import { useRouter } from "expo-router";

export default function Productos() {
  const [textoBuscar, setTextoBuscar] = useState("");
  const [lista, setLista] = useState(productos);
  const router = useRouter();

  const filtrar = (texto: string) => {
    setTextoBuscar(texto);
    setLista(
      productos.filter((p) =>
        p.titulo.toLowerCase().includes(texto.toLowerCase())
      )
    );
  };

  const toggleDescripcion = (id: number) => {
    setLista(
      lista.map((item) =>
        item.id === id ? { ...item, mostrarTodo: !item.mostrarTodo } : item
      )
    );
  };

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <TextInput
        label="Buscar producto"
        value={textoBuscar}
        onChangeText={filtrar}
        style={{ marginBottom: 10 }}
      />
      <FlatList
        data={lista}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Card style={{ marginBottom: 10 }}>
            <Card.Content>
              <Text variant="titleMedium">{item.titulo}</Text>
              <Image
                source={{ uri: item.imagen }}
                style={{ height: 150, marginVertical: 10 }}
              />
              <Text>
                {item.mostrarTodo
                  ? item.descripcion + " (Ver menos)"
                  : item.descripcion.slice(0, 30) + "... (Ver más)"}
              </Text>
              <Button onPress={() => toggleDescripcion(item.id)}>
                {item.mostrarTodo ? "Ver menos" : "Ver más"}
              </Button>
              <TouchableOpacity
                onPress={() => router.push(`/detalle/${item.id}`)}
              >
                <Button mode="contained">Acción</Button>
              </TouchableOpacity>
            </Card.Content>
          </Card>
        )}
      />
    </View>
  );
}
