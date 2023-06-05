/* eslint-disable prettier/prettier */
import React from 'react';
import {ScrollView, Text} from 'react-native';
import {styles} from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';

const Setting = () => {
  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <Text>Setting</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default React.memo(Setting);
