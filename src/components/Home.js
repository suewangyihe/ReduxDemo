import React, { Component } from 'react';
import { View, Text ,StyleSheet} from 'react-native';

class Home extends Component {

  constructor(props, context) {
    super(props, context);
  }

  static defaultProps = {
    StylesDefault: StyleSheet.create({
      contentStyle: {
        justifyContent: 'center',
        alignItems: 'center',
      },
      msgTextStyle: {
        fontSize: 30,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
      }
    })
  };
  render() {
    return (
      <View style={this.props.StylesDefault.contentStyle}>
        <Text style={this.props.StylesDefault.msgTextStyle}>
          Test
        </Text>
      </View>
    );
  }
}



export default Home;
