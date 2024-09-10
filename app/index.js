import { Text, View } from "react-native";
import { NavBar } from "@/components/navebar";
import { Rodape } from "@/components/rodape";
import { Forms } from "@/components/forms";
import { StatusBar } from "react-native";

export default function Index() {
  return (
    <View>
      <StatusBar backgroundColor="#E8A354" barStyle="dark-content" />
      <NavBar />
      <Forms />
      <Rodape />
    </View>
  );
}
