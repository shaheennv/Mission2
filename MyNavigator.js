import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Icon, List, ListItem } from 'native-base';
import { AppRegistry, Navigator,NavigatorIOS, Text, View, ListView, TouchableHighlight, Image } from 'react-native';
import MyScene from './MyScene';
var REQUEST_URL = 'https://cardbox-api.herokuapp.com/cards.json';

// var MyScene = require('./MyScene')
var CardList = require('./CardList');
// var WebPage = require('./components/webpage');
var MainPage = require('./MainPage');

var SplashPage = require('./SplashPage');

class MyNavigator extends Component{
  constructor(props) {
    super(props);
    this.state = {
      tab1: true,
      tab2: false,
    };
  }
  render() {
    return (
      <Navigator
          initialRoute={{id: 'SplashPage', name: 'Index',passProps: 'asdasd'}}
          renderScene={this.renderScene.bind(this)}
          configureScene={(route) => {
            if (route.sceneConfig) {
              return route.sceneConfig;
            }
            return Navigator.SceneConfigs.HorizontalSwipeJump;
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
              navigator={navigator} card={route.data}
              onBack={() => {
                  navigator.pop(); }} />

      );
    }
  }
  gotoPrev() {
    console.log("gotoPrev")
    this.props.navigator.pop();
  }
}



module.exports = MyNavigator;
