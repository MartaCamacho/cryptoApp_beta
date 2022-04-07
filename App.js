import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import CoinDetails from "./src/screens/CoinDetails";
import Home from "./src/screens/Home";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Home/> */}
      <CoinDetails/>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    paddingTop: 50,
  },
  
});
