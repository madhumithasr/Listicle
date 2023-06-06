/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue,
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderRadius: 8,
    width: '80%',
  },
  title: {
    color: colors.white,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
