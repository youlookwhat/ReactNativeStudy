'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import Drawer from 'react-native-drawer'

var NavigationBar = require('../Base/NavigationBar');

module.exports = React.createClass({

  getDefaultProps: function(){

    return {

    };

  },

  getInitialState: function(){
    return {
      index:0
    };
  },

  componentWillMount: function() {

  },

  componentDidMount: function(){

  },

  renderMain() {
    var index = this.state.index;

    if (index === 0){
      return (

        <View style={{backgroundColor:'red',flex:1}}>

        </View>

      )
    }
    else if (index === 1){
      return (
        <View>
        </View>
      )
    }
  },

  leftClick() {

    this._drawer.open();

  },

  rightClick() {


  },

  renderNav() {

    return(

      <View style={{flex:1}}>
        <NavigationBar leftClick= {this.leftClick} leftTitle={'侧拉'} title= {'首页'} rightTitle={'发布'} rightClick={this.rightClick} navigator={this.props.navigator}/>
        {this.renderMain()}

      </View>

    );

  },

  renderDrawerBar() {

    return (

      <View style={{backgroundColor:'blue',flex:1}}>

        <Text style={{marginTop:64}}>hahaha</Text>

      </View>

    )

  },

  render(){

    return (
      <Drawer
        tapToClose={true}
        ref={(ref) => this._drawer = ref}
        content={this.renderDrawerBar()}
        openDrawerOffset={0.5}
        tweenHandler={(ratio) => ({
          main: { opacity:(4-ratio)/4 }
        })}
        >
        {this.renderNav()}
      </Drawer>
    );

  },

});

var styles = StyleSheet.create({

});



