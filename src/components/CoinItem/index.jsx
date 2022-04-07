import { Text, View, Image } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import styles from "./styles";

const CoinItem = ({ marketCoin }) => {
  const {
    name,
    current_price,
    market_cap_rank,
    price_change_percentage_24h,
    symbol,
    market_cap,
    image
  } = marketCoin;

  const normalizeMarketCap = (marketCap) => {
    if(marketCap > 1000000000000) {
        return `${Math.floor(marketCap / 1000000000000)} T`
    }
    if(marketCap > 1000000000) {
        return `${Math.floor(marketCap / 1000000000)} B`
    }
    if(marketCap > 1000000) {
        return `${Math.floor(marketCap / 1000000)} M`
    }
    if(marketCap > 1000) {
        return `${Math.floor(marketCap / 1000)} K`
    }
    return marketCap
  }

  const percentageColor = price_change_percentage_24h < 0 ? '#ea3943' : price_change_percentage_24h > 0 ? '#16c784': '#fff';

  return (
    <View style={styles.coinContainer}>
      <Image
        source={{
          uri: image,
        }}
        style={{
          height: 20,
          width: 20,
          marginRight: 10,
          alignSelf: "center",
        }}
      />
      <View>
        <Text style={styles.title}>{name}</Text>
        <View style={{ flexDirection: "row" }}>
          <View>
            <Text style={styles.rank}>{market_cap_rank}</Text>
          </View>
          <Text style={styles.text}>{symbol.toUpperCase()}</Text>
          <AntDesign
            name={price_change_percentage_24h < 0 ? "caretdown" : "caretup"}
            size={12}
            color={percentageColor}
            style={{ alignSelf: "center", marginHorizontal: 5 }}
          />
          <Text style={[styles.text, {color: percentageColor}]}>{price_change_percentage_24h.toFixed(2)}%</Text>
        </View>
      </View>
      <View style={{ marginLeft: "auto", alignItems: 'flex-end' }}>
        <Text style={styles.title}>{current_price}</Text>
        <Text style={styles.text}>Mcap {normalizeMarketCap(market_cap)}</Text>
      </View>
    </View>
  );
};

export default CoinItem;
