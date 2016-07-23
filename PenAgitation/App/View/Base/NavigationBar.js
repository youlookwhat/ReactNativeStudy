'use strict';

import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    PixelRatio,
    Platform
} from 'react-native';

let GeneralStyle = require('../../Style/GeneralStyle');
let Tools = require('../../Util/GeneralTools');
let Constant = require('../../Util/Constant');

var view = React.createClass({


    render: function () {

        return (

            <View style={[GeneralStyle.containerRow, {
                height: Constant.navBarHeight,
                width: Constant.screenWidth,
                alignItems: 'center',
                backgroundColor: Constant.baseColor,
                borderBottomWidth: 1 / PixelRatio.get(),
                borderColor: '#b2b2b2'
            }, this.props.style]}>


                <View style={{width: 60}}>

                    {this.props.hasNoBack ? null : <TouchableOpacity
                        onPress={this.props.leftClick ? this.props.leftClick : ()=>this.props.navigator.pop()}
                        style={[{
                            paddingLeft: 10,
                            paddingTop: Platform.OS === 'android' ? 3 : 10,
                            width: 60
                        }, this.props.leftStyle]}>
                        <Text
                            style={[this.props.leftTitleStyle, {color: 'white'}]}>{this.props.leftTitle ? this.props.leftTitle : '返回'}</Text>
                        {/*<Image style={{width:12,height:20}}
                         source={Tools.icon('back')} />*/}
                    </TouchableOpacity>}


                </View>
                <View style={{flex: 1, alignItems: 'center'}}>
                    <Text style={[styles.navBarTitleText, this.props.titleStyle]}>{this.props.title}</Text>
                </View>

                <View style={{width: 60}}>

                    {this.props.rightClick ? <TouchableOpacity
                        onPress={this.props.rightClick}
                        style={[{
                            paddingRight: 10,
                            paddingTop: Platform.OS === 'android' ? 3 : 10,
                            alignSelf: 'flex-end'
                        }, this.props.rightStyle]}
                    >
                        <Text
                            style={[{color: 'white'}, this.props.rightTitleStyle]}>{this.props.rightTitle ? this.props.rightTitle : '发送'}</Text>
                    </TouchableOpacity> : <View
                        onPress={this.props.rightClick}
                        style={[{
                            paddingRight: 10,
                            paddingTop: Platform.OS === 'android' ? 3 : 10,
                            alignSelf: 'flex-end'
                        }, this.props.rightStyle]}
                    >
                        <Text
                            style={[{color: 'gray'}, this.props.rightTitleStyle]}>{this.props.rightTitle ? this.props.rightTitle : ''}</Text>
                    </View> }
                </View>

            </View>
        );
    },

});

var styles = StyleSheet.create({


    navBarTitleText: {
        color: "white",
        fontWeight: '500',
        fontSize: 15,
        marginTop: Platform.OS === 'android' ? 3 : 10
    },

});


module.exports = view;
