/* eslint-disable prettier/prettier */
import React from 'react';
import {FlatList} from 'react-native';

import {SafeAreaView} from 'react-native-safe-area-context';
import {product} from '../../../data/product';
import FavoriteItem from '../../../components/FavoriteItem';
import Header from '../../../components/Header';

const Favorites = () => {
  const renderItem = ({item}) => {
    return <FavoriteItem {...item} />;
  };

  return (
    <SafeAreaView>
      <Header title="Favorites" />

      <FlatList
        data={product}
        renderItem={renderItem}
        keyExtractor={item => String(item?.id)}
      />
    </SafeAreaView>
  );
};

export default React.memo(Favorites);
