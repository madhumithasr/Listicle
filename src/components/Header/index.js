/* eslint-disable prettier/prettier */
import React from 'react';
import {Pressable, Text, View, Image} from 'react-native';
import {styles} from './styles';

const Header = ({title, onBackPress}) => {
  return (
    <View style={styles.container}>
      <Pressable hitSlop={20} onPress={onBackPress}>
        <Image
          style={styles.image}
          source={require('./../../assets/auth-back.png')}
        />
      </Pressable>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default React.memo(Header);
