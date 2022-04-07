import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Coin from "../../assets/data/crypto.json";
import CoindetailsHeader from "../components/CoinItem/CoinDetails/CoindetailsHeader";
import CoinPriceSection from "../components/CoinItem/CoinDetails/CoinPriceSection";

const CoinDetails = () => {
  const {
    image: { small },
    name,
    symbol,
    market_data: {
      market_cap_rank,
      current_price,
      price_change_percentage_24h,
    },
  } = Coin;

  return (
    <View style={{ paddingHorizontal: 10 }}>
      <CoindetailsHeader
        image={small}
        symbol={symbol}
        marketCapRank={market_cap_rank}
      />
      <CoinPriceSection
        name={name}
        currentPrice={current_price}
        changePerc={price_change_percentage_24h}
      />
    </View>
  );
};

export default CoinDetails;

const styles = StyleSheet.create({});
