import React, { Component } from 'react';
import { AppRegistry, Navigator,NavigatorIOS, Text, View, ListView, TouchableHighlight, Image } from 'react-native';
import MyScene from './MyScene';
var REQUEST_URL = 'https://cardbox-api.herokuapp.com/cards.json';

// var MyScene = require('./MyScene')
var CardList = require('./CardList');
// var WebPage = require('./components/webpage');
var MainPage = require('./MainPage');

var SplashPage = require('./SplashPage');

class MyCards extends Component{
  render() {
    return (
      <Navigator
          initialRoute={{id: 'SplashPage', name: 'Index',passProps: 'asdasd'}}
          renderScene={this.renderScene.bind(this)}
          configureScene={(route) => {
            if (route.sceneConfig) {
              return route.sceneConfig;
            }
            return Navigator.SceneConfigs.FloatFromRight;
          }} />
    );
  }
  renderScene(route, navigator) {
    var routeId = route.id;
    if (routeId === 'SplashPage') {
      return (
        <SplashPage
          navigator={navigator} />
      );
    }
    if (routeId === 'CardList') {
      return (
        <CardList
          navigator={navigator} card={route.data} />
      );
    }
  }
}

AppRegistry.registerComponent('Mission2', () => MyCards);