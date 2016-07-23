import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Navigator,
  StyleSheet,
  PixelRatio,
  Platform
} from 'react-native';

let GeneralStyle = require('../../Style/GeneralStyle');
let Tools = require ('../../Util/GeneralTools');
let Constant = require('../../Util/Constant');
let NavigationBar = require('./NavigationBar');
import Drawer from 'react-native-drawer'

var BaseConfig = Navigator.SceneConfigs.PushFromRight;
var CustomSceneConfig = Object.assign({}, BaseConfig, {
  // A very tightly wound spring will make this transition fast
  springTension: 200,
  springFriction: 26,

  defaultTransitionVelocity: 3,

});

var Nav = React.createClass({


  willFocus: function(route){




  },
  routeAction: function(route,navigator){

    if (route.index === 0){
      return (

        <View style={{backgroundColor:'blue',flex:1}}/>

      );
    }


  },

  getInitialState: function(){
    this.NavigationBarRouteMapper = {

      LeftButton: (route, navigator, index, navState) => {

        return (
          <TouchableOpacity
            onPress={()=>{this.setState({drawerOpen:true})}}
            style={styles.navBarLeftButton}>
            <Text style={{color:'white'}} >Drawer</Text>
            {/*<Image style={{width:12,height:20}}
             source={Tools.icon('back')} />*/}
          </TouchableOpacity>
        );

      },

      RightButton: (route, navigator, index, navState) => {

        return null;
      },

      Title: (route, navigator, index, navState) => {
        return (
          <Text style={[styles.navBarText, styles.navBarTitleText]}>
            {route.title}
          </Text>
        );
      },

    };
    return {
      showNavBar: true,
      drawerOpen: false
    };
  },

  _toggleNavBarVisibility: function(isVisible) {

    this.setState(state => ({
      showNavBar: isVisible,
    }));
  },

  renderNavBar: function() {


    if (!this.state.showNavBar){
      return null
    }

    return (
      <Navigator.NavigationBar
        routeMapper={this.NavigationBarRouteMapper}
        style={styles.navBar}
        />
    )


  },
  configureScene(route){

    return Navigator.SceneConfigs.PushFromRight;

  },

  initialRoute() {

    return Tools.route(0,'我的')

  },


  renderNav: function() {



    return(

      <Navigator
        onWillFocus = {this.willFocus}
        debugOverlay={false}
        initialRoute={this.initialRoute()}
        renderScene={(route, navigator) => this.routeAction(route,navigator)}
        navigationBar={
          this.renderNavBar()
        }
        configureScene={this.configureScene}
        />


    );

  },
  renderDrawerBar() {


    return (

      <View style={{backgroundColor:'red',flex:1}}>
        <Text style={{marginTop:64}}>hahaha</Text>

      </View>

    )

  },
  render() {

    return(
      <Drawer
        tapToClose={true}
        ref={(ref) => global._drawer = ref}
        content={this.renderDrawerBar()}
        open = {this.state.drawerOpen}
        openDrawerOffset={0.5}
        //tweenHandler={(ratio) => ({
        //  main: { opacity:(2-ratio)/2 }
        //})}
        >
        {this.renderNav()}
      </Drawer>
    )

  }


});




var styles = StyleSheet.create({

  navBar: {
    backgroundColor: Constant.baseColor,
    borderBottomWidth: 1 / PixelRatio.get(),
    borderColor: '#b2b2b2'
  },

  navBarText: {
    fontSize: 16,
    marginVertical: Platform.OS ==='android'? 0:10,
    color: "white",
  },

  navBarTitleText: {
    color: "white",
    fontWeight: '500',
    marginVertical: Platform.OS ==='android'? 0:10,
  },
  navBarLeftButton: {
    paddingLeft: 15,
    paddingTop: Platform.OS ==='android'? 0:10
  },
  navBarRightButton: {
    paddingRight: 10,
  }

});

module.exports = Nav;