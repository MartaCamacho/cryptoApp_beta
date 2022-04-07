import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { Ionicons, EvilIcons } from "@expo/vector-icons";

const CoindetailsHeader = ({image, symbol, marketCapRank }) => {
  return (
    <View style={styles.headerContainer}>
      <Ionicons name="chevron-back" size={30} color="white" />
      <View style={styles.tickerContainer}>
        <Image source={{ uri: image }} style={styles.cryptoImage} />
        <Text style={styles.tickerTitle}>{symbol.toUpperCase()}</Text>
        <View style={styles.rankContainer}>
            <Text style={styles.tickerPosition}>#{marketCapRank}</Text>
        </View>
      </View>
      <EvilIcons name="user" size={30} color="white" />
    </View>
  )
}

export default CoindetailsHeader;

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row', 
        paddingHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    tickerContainer: {
        flexDirection: 'row', 
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    tickerTitle: {
        color: '#fff', 
        fontWeight: 'bold', 
        marginHorizontal: 5
    },
    tickerPosition: {
        color: '#fff',
        fontWeight: 'bold', 
        fontSize: 15
    },
    rankContainer: {
        backgroundColor: '#585858',
        paddingHorizontal: 5,
        paddingVertical: 2,
        borderRadius: 5
    },
    cryptoImage: {
        width: 25,
        height: 25,
    },
})