import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Coin from "../../assets/data/crypto.json";
import CoindetailsHeader from "../components/CoinItem/CoinDetails/CoindetailsHeader";

const CoinDetails = () => {
  const {
    image: { small },
    name,
    symbol,
    market_data: { market_cap_rank, current_price },
  } = Coin;
  return (
    <View style={{ paddingHorizontal: 10 }}>
      <CoindetailsHeader
        image={small}
        symbol={symbol}
        marketCapRank={market_cap_rank}
      />
      <View style={styles.priceContainer}>
        <View>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.currentPrice}>${current_price.usd}</Text>
        </View>
        <View>
            <Text>aa</Text>
        </View>
      </View>
    </View>
  );
};

export default CoinDetails;

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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
});
