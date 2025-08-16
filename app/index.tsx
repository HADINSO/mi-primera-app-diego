import React from "react";
import { View, FlatList } from "react-native";
import { Card, Text, Avatar } from "react-native-paper";
import { useRouter } from "expo-router";

const menuItems = [
  { id: "autor", titulo: "Autor", ruta: "/autor", icon: "account-tie", color: "#6A5ACD" },
  { id: "login", titulo: "Inicio de Sesión", ruta: "/login", icon: "lock", color: "#FF4081" },
  { id: "productos", titulo: "Productos", ruta: "/productos", icon: "shopping", color: "#4CAF50" },
  { id: "registro", titulo: "Registro", ruta: "/registro", icon: "form-select", color: "#2196F3" },
  { id: "perfil", titulo: "Perfil", ruta: "/perfil", icon: "account-circle", color: "#9C27B0" },
  { id: "configuracion", titulo: "Configuración", ruta: "/configuracion", icon: "cog", color: "#FF9800" },
  { id: "servicios", titulo: "Servicios", ruta: "/servicios", icon: "tools", color: "#009688" },
];

export default function Home() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: "#F5F6FA" }}>
      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card
            style={{
              marginVertical: 8,
              borderRadius: 15,
              elevation: 4,
              backgroundColor: "white",
            }}
            onPress={() => router.push(item.ruta)}
          >
            <Card.Title
              title={item.titulo}
              titleStyle={{ fontSize: 18, fontWeight: "bold" }}
              left={(props) => (
                <Avatar.Icon
                  {...props}
                  icon={item.icon}
                  style={{ backgroundColor: item.color }}
                  color="white"
                />
              )}
            />
          </Card>
        )}
      />
    </View>
  );
}
