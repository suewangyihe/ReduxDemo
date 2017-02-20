import React, { Component } from 'react';
import { View, Dimensions, TouchableOpacity, Text ,StyleSheet} from 'react-native';
import { connect } from 'react-redux';
import Mine from './Mine';
import Home from './Home';
import { pagehome, pagemine } from '../actions';
const {width: ScreenWidth, height: ScreenHeight} = Dimensions.get('window');


class Tabbar extends Component {
  constructor(props, context) {
    super(props, context);
    this.swithView = this.swithView.bind(this);
  }

  swithView(index) {
    if (index === 0) {
      this.props.pagehome();
    } else {
      this.props.pagemine();
    }
  }

  static defaultProps = {
    StylesDefault: StyleSheet.create({
      pageStyle: {
        flexDirection: 'column-reverse',
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width
      },
      tabStyle: {
        flexDirection: 'row',
        justifyContent:'space-around',
        marginBottom:25
      },
      barStyle: {
        backgroundColor: '#f8f8f8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        width:ScreenWidth/2
      },
      textStyle: {
        fontSize: 20,
      },
      viewStyle:{
        height:ScreenHeight-75,
        width:ScreenWidth,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#fff'
      }
    })
  };


  render() {
    return (
        <View style={this.props.StylesDefault.pageStyle}>
          <View style={this.props.StylesDefault.tabStyle}>
            <TouchableOpacity style={this.props.StylesDefault.barStyle} onPress={()=>this.swithView(0)}>
              <Text style={this.props.StylesDefault.textStyle}>Tab0</Text>
            </TouchableOpacity>
            <TouchableOpacity style={this.props.StylesDefault.barStyle} onPress={()=>this.swithView(1)}>
              <Text style={this.props.StylesDefault.textStyle}>Tab1</Text>
            </TouchableOpacity>
          </View>
          <View style={this.props.StylesDefault.viewStyle}>
            {(this.props.page === 1)?<Mine />:<Home />}
          </View>
        </View>
    );
  }
}

const mapStateToProps = ({ pageIndex }) => {
  const { page } = pageIndex;

  return { page };
};

export default connect(mapStateToProps, { pagehome, pagemine })(Tabbar);
