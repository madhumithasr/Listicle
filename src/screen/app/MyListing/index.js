/* eslint-disable prettier/prettier */
import React from 'react';
import {FlatList} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {product} from '../../../data/product';
import FavoriteItem from '../../../components/FavoriteItem';
import Header from '../../../components/Header';

const MyListing = ({navigation}) => {
  const renderItem = ({item}) => {
    const onProductPress = () => {
      navigation.navigate('ProductDetails', {product: item});
    };
    return (
      <FavoriteItem
        icon={require('../../../assets/download.png')}
        onPress={onProductPress}
        {...item}
      />
    );
  };

  const goBack = () => navigation.goBack();

  return (
    <SafeAreaView>
      <Header title="My Listings" showBack onBackPress={goBack} />

      <FlatList
        data={product}
        renderItem={renderItem}
        keyExtractor={item => String(item?.id)}
      />
    </SafeAreaView>
  );
};

export default React.memo(MyListing);
