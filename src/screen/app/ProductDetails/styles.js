/* eslint-disable prettier/prettier */
import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '../../../utils/colors';

const {height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
  footer: {
    padding: 24,
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {},
  image: {
    width: '100%',
    height: height * 0.45,
  },
  content: {
    backgroundColor: colors.white,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginTop: -40,
    paddingHorizontal: 24,
  },
  title: {
    marginTop: 35,
    fontSize: 24,
    fontWeight: '500',
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  description: {
    color: colors.textGrey,
    fontWeight: '300',
    marginVertical: 8,
  },
  bookmarkContainer: {
    backgroundColor: colors.lightGrey,
    padding: 18,
    borderRadius: 8,
    marginRight: 16,
  },
  bookmarkIcon: {
    width: 24,
    height: 24,
  },
  backContainer: {
    backgroundColor: colors.white,
    padding: 10,
    margin: 24,
    borderRadius: 8,
    marginRight: 16,
    position: 'absolute',
  },
  backIcon: {
    width: 20,
    height: 20,
  },
});
