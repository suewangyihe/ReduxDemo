import React, { Component } from 'react';
import {   View,
  Text,
  Dimensions,
  TouchableOpacity,
  StyleSheet
 } from 'react-native';
import { connect } from 'react-redux';
import { loginUser, logout } from '../actions';

const {width: ScreenWidth,} = Dimensions.get('window');

class Mine extends Component {
  constructor(props, context) {
    super(props, context);
    this.onButtonPress = this.onButtonPress.bind(this);
    this.renderSign = this.renderSign.bind(this);
  }

  onButtonPress() {
    if (this.props.msg === 'Rilakkuma') {
      this.props.logout();
    } else {
      this.props.loginUser();
    }
  }

  renderSign() {
    if (this.props.msg === 'Rilakkuma') {
      return (
        <TouchableOpacity onPress={this.onButtonPress}>
          <Text style={{color:'lightpink',fontSize:28}}>
          Sign out
          </Text>
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity onPress={this.onButtonPress}>
          <Text style={{color:'lightpink',fontSize:28}}>
          Sign in
          </Text>
        </TouchableOpacity>
      );
    }
  }


  static defaultProps = {
    StylesDefault: StyleSheet.create({
      contentStyle: {
        height:100,
        width:ScreenWidth-40,
        alignSelf:'center',
        justifyContent:'center',
        alignItems:'center',
      },
      msgTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
      },
      logoutStyle:{
        height:50,
        width:ScreenWidth-80,
        alignSelf:'center',
        backgroundColor:'#fff',
        justifyContent:'center',
        alignItems:'center'
      }
    })
  };

  render() {
    if (this.props.msg == 'Rilakkuma') {
      return (
        <View style={this.props.StylesDefault.contentStyle}>
          <Text style={this.props.StylesDefault.msgTextStyle}>
            {this.props.msg}
          </Text>
          <View style={this.props.StylesDefault.logoutStyle}>
            {this.renderSign()}
          </View>
        </View>
      );
    }else {
      return(
      <View style={this.props.StylesDefault.contentStyle}>
          {this.renderSign()}
      </View>
      );}
  }
  }


const mapStateToProps = ({ auth }) => {
  const { msg } = auth;

  return { msg };
};

export default connect(mapStateToProps, { loginUser, logout })(Mine);
