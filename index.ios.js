import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Icon, List, ListItem } from 'native-base';
import { AppRegistry, Navigator,NavigatorIOS, Text, View, ListView, TouchableHighlight, Image } from 'react-native';
import MyScene from './MyScene';
import AddCard from './AddCard';
import EditCard from './EditCard';
var REQUEST_URL = 'https://cardbox-api.herokuapp.com/cards.json';

// var MyScene = require('./MyScene')
var ArticleShow = require('./ArticleShow');
// var WebPage = require('./components/webpage');
var MainPage = require('./MainPage');
var MyNavigator = require('./MyNavigator');

var SplashPage = require('./SplashPage');

class MyCards extends Component{
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
              return Navigator.SceneConfigs.PushFromRight;
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
      if (routeId === 'ArticleShow') {
        return (

              <ArticleShow
                navigator={navigator} card={route.data}
                onBack={() => {
                    navigator.pop(); }} />

        );
      }
      if (routeId === 'AddCard') {
        return (

              <AddCard
                navigator={navigator}
                onBack={() => {
                    navigator.pop(); }}  />

        );
      }
      if (routeId === 'EditCard') {
        return (

              <EditCard
                navigator={navigator} card={route.data}
                onBack={() => {
                    navigator.pop(); }}    />

        );
      }
    }
    gotoPrev() {
      console.log("gotoPrev")
      this.props.navigator.pop();
    }

    toggleTab1() {
      this.setState({
        tab1: true,
        tab2: false,
      });
    }
    toggleTab2() {
      this.setState({
        tab1: false,
        tab2: true,
      });
    }
}



AppRegistry.registerComponent('Mission2', () => MyCards);