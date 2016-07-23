/**
 * Created by hezhe on 16/2/18.
 */


import React, { Component } from 'react';
import {
  StyleSheet,
  Dimensions,
  Platform
} from 'react-native';

var ExtraDimensions = require('react-native-extra-dimensions-android');

const screenWidth =Dimensions.get('window').width;
const screenHeight =Platform.OS == 'android'?ExtraDimensions.get('REAL_WINDOW_HEIGHT')-ExtraDimensions.get('STATUS_BAR_HEIGHT')-ExtraDimensions.get('SOFT_MENU_BAR_HEIGHT')-ExtraDimensions.get('SMART_BAR_HEIGHT'): Dimensions.get('window').height;
const navBarHeight =Platform.OS == 'android'? 56 : 64;

let defaultAvatar = 'defaulthead';

let headholder = 'defaulthead';
let bigplaceholder = 'bigplaceholder';
let placeholder = 'placeholder';

let username ='#666666'
let bgColor = '#f2f2f1'
//let bgColor = 'white'
//let bgColor = 'rgba(230, 28, 100, 0.02)'

let baseBarColor = 'rgba(230, 28, 100, 0.5)'

let baseColor = '#E61C64'
//let lineColor = '#whitesmoke'
let lineColor = '#e3e3e3'
let pageSize = '20'


var options = {
  title: '选择图片', // specify null or empty string to remove the title
  cancelButtonTitle: '取消',
  takePhotoButtonTitle: '照相', // specify null or empty string to remove this button
  chooseFromLibraryButtonTitle: '本地相册', // specify null or empty string to remove this button
  //customButtons: {
  //  'Choose Photo from Facebook': 'fb', // [Button Text] : [String returned upon selection]
  //},
  imageNum: 9,
  cameraType: 'back', // 'front' or 'back'
  mediaType: 'photo', // 'photo' or 'video'
  videoQuality: 'high', // 'low', 'medium', or 'high'
  durationLimit: 10, // video recording max time in seconds
  //maxWidth: 100, // photos only
  //maxHeight: 100, // photos only
  //aspectX: 2, // android only - aspectX:aspectY, the cropping image's ratio of width to height
  //aspectY: 1, // android only - aspectX:aspectY, the cropping image's ratio of width to height
  quality: 0.1, // 0 to 1, photos only
  angle: 0, // android only, photos only
  allowsEditing: false, // Built in functionality to resize/reposition the image after selection
  noData: true, // photos only - disables the base64 `data` field from being generated (greatly improves performance on large photos)
  storageOptions: { // if this key is provided, the image will get saved in the documents directory on ios, and the pictures directory on android (rather than a temporary directory)
    skipBackup: true, // ios only - image will NOT be backed up to icloud
    path: 'images' // ios only - will save image at /Documents/images rather than the root
  }
};

module.exports = {
  defaultAvatar,
  username,
  bgColor,
  lineColor,
  screenWidth,
  screenHeight,
  pageSize,
  options,
  baseColor,
  baseBarColor,
  navBarHeight,
  headholder,
  bigplaceholder,
  placeholder
};