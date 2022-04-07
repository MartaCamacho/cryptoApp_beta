import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import Coin from "../../assets/data/crypto.json";
import CoindetailsHeader from "../components/CoinItem/CoinDetails/CoindetailsHeader";
import CoinPriceSection from "../components/CoinItem/CoinDetails/CoinPriceSection";
import { LineChart } from "react-native-chart-kit";

const screenWidth = Dimensions.get("window").width;

const CoinDetails = () => {
  const {
    image: { small },
    name,
    symbol,
    prices,
    market_data: {
      market_cap_rank,
      current_price,
      price_change_percentage_24h,
    },
  } = Coin;

  const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  };

  return (
    <View style={{ paddingHorizontal: 10 }}>
      <CoindetailsHeader
        image={small}
        symbol={symbol}
        marketCapRank={market_cap_rank}
      />
      <CoinPriceSection
        name={name}
        currentPrice={`$${current_price.usd.toFixed(2)}`}
        changePerc={price_change_percentage_24h}
      />
      <View>
        <LineChart
          data={{
            datasets: [
              {
                data: [
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                ],
              },
            ],
          }}
          width={screenWidth}
          withVerticalLines={false}
          withHorizontalLines={false}
          withVerticalLabels={false}
          withHorizontalLabels={false}
          height={220}
          getDotColor={() => current_price.usd > prices[0][1] ? '#16c784' : '#ea3943'}
          chartConfig={chartConfig}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
            width: screenWidth,
          }}
        />
        {/* <ChartPathProvider
        data={{
          points: prices.map((price) => ({ x: price[0], y: price[1] })),
          smoothingStrategy: "complex",
        }}
      >
          <ChartPath
            height={screenWidth / 2}
            stroke="yellow"
            width={screenWidth}
          />
          <ChartDot style={{ backgroundColor: "blue" }} />
      </ChartPathProvider> */}
      </View>
    </View>
  );
};

export default CoinDetails;

const styles = StyleSheet.create({});
