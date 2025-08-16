import React from "react";
import { View } from "react-native";
import { Text, Switch, Card, Avatar } from "react-native-paper";

export default function Configuracion() {
  const [dark, setDark] = React.useState(false);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#F5F6FA" }}>
      <Card
        style={{
          width: "85%",
          padding: 20,
          borderRadius: 20,
          elevation: 4,
          backgroundColor: "white",
        }}
      >
        <View style={{ alignItems: "center", marginBottom: 15 }}>
          <Avatar.Icon size={60} icon="cog" style={{ backgroundColor: "#FF9800" }} />
          <Text variant="headlineMedium" style={{ fontWeight: "bold", marginTop: 10, color: "#FF9800" }}>
            Configuración
          </Text>
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginVertical: 10 }}>
          <Text style={{ fontSize: 16, color: "#424242" }}>🌙 Tema oscuro</Text>
          <Switch value={dark} onValueChange={setDark} color="#4CAF50" />
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginVertical: 10 }}>
          <Text style={{ fontSize: 16, color: "#424242" }}>🔔 Notificaciones</Text>
          <Switch value={!dark} onValueChange={() => {}} color="#2196F3" />
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginVertical: 10 }}>
          <Text style={{ fontSize: 16, color: "#424242" }}>🔒 Privacidad</Text>
          <Switch value={false} onValueChange={() => {}} color="#9C27B0" />
        </View>
      </Card>
    </View>
  );
}
