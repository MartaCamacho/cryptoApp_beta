import { StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const CoinPriceSection = ({ name, currentPrice, changePerc }) => {
  const percentageColor =
    changePerc < 0 ? "#ea3943" : changePerc > 0 ? "#16c784" : "#fff";

  return (
    <View style={styles.priceContainer}>
      <View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.currentPrice}>{currentPrice}</Text>
      </View>
      <View
        style={[styles.percContainer, { backgroundColor: percentageColor }]}
      >
        <AntDesign
          name={changePerc < 0 ? "caretdown" : "caretup"}
          size={12}
          color="#fff"
          style={{ alignSelf: "center", marginHorizontal: 5 }}
        />
        <Text style={styles.changePerc}>{changePerc.toFixed(2)}</Text>
      </View>
    </View>
  );
};

export default CoinPriceSection;

const styles = StyleSheet.create({
  name: {
    color: "#fff",
    fontSize: 15,
  },
  currentPrice: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "600",
    letterSpacing: 1,
  },
  priceContainer: {
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  percContainer: {
    borderRadius: 5,
    flexDirection: "row",
    paddingHorizontal: 3,
    paddingVertical: 8,
  },
  changePerc: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "500",
  },
});
