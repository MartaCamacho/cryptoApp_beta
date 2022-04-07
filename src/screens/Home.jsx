import { StyleSheet, FlatList, View } from 'react-native';
import React from 'react';
import CoinItem from "../components/CoinItem";
import cryptocurrencies from '../../assets/data/cryptoCurrencies.json';

const Home = () => {
  return (
    <FlatList
        data={cryptocurrencies}
        renderItem={({item}) => <CoinItem marketCoin={item}/>}
      />
  )
}

export default Home

const styles = StyleSheet.create({})