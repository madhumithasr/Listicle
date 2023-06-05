/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';

const Chair = props => {
  const {theme} = props; //object destructuring
  const [isBig, setIsBig] = useState(false);

  useEffect(() => {
    console.log('inside useEffect');

    return () => {};
  }, []);

  const changeState = () => {
    setIsBig(currentState => !currentState);
  };
  return (
    <View>
      <Text
        style={{
          fontSize: isBig ? 24 : 14,
          color: theme === 'dark' ? 'grey' : 'violet',
        }}
        onPress={changeState}>
        This is chair
      </Text>
    </View>
  );
};
export default Chair;
