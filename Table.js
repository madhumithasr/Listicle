/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text} from 'react-native';

class Table extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isBig: false,
    };
  }

  componentDidMount;

  changeState = () => {
    this.setState({isBig: !this.state.isBig});
  };
  render() {
    console.log('this.state.isBig :>>', this.state.isBig);
    return (
      <View>
        <Text
          // eslint-disable-next-line react-native/no-inline-styles
          style={{fontSize: this.state.isBig ? 24 : 14}}
          onPress={this.changeState}>
          This is Table
        </Text>
      </View>
    );
  }
}

export default Table;
