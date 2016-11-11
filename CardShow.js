'use strict';

import React, { Component, PropTypes } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, List, ListItem,Spinner } from 'native-base';
import { ScrollView, Text, TouchableHighlight, Image, View,RefreshControl, ListView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
var REQUEST_URL = 'https://cardbox-api.herokuapp.com/cards.json';
var MainPage = require('./MainPage');
var AddCard = require('./AddCard');

const styles = StyleSheet.create({
  containerList: {
    marginLeft: 0,
    borderBottomWidth: 0,
    paddingRight: 0,
    paddingTop: 0,
  },
  containerSplash: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  outerShell: {
    margin: 0,
  },
  buttonAdd: {
    color: "#fff",
  },
  headerTitle: {
    color: '#fff',
  },
  header: {
    backgroundColor: '#000',
  },
  welcome: {
    fontSize: 15,
    color: '#bbb',
    textAlign: 'center',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  container: {
        backgroundColor: "#000",
        margin: 0,
  },
  cardItem: {
    flex: 1,
    flexDirection: 'row',
     alignItems: 'stretch', 
    justifyContent: 'center',
    height: 250,
    margin: 0,
  },
  imgThumb: {
    flex: 1,
     resizeMode: 'stretch',
  },
  cardDesc: {
    flex: 0.5,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  cardTitle:{
    fontSize: 23,
    fontFamily: "Lato", 
    flex: 0.5,
    color: '#fff',
    marginBottom: 5,
  },
  postDetails: {
    flex: 0.5,
    flexDirection: 'row',
  },
  userName: {
    fontSize: 13,
    fontFamily: "Lato-Bold",
    color: '#808080',
    marginRight: 10,
  },
  cardDescInside: {
    padding: 15,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    position: 'relative',
    top: 150,
    left: 0,
    height: 150,
    opacity: 0.8,
    backgroundColor: '#000',
  }
})


class CardShow extends Component {
  constructor(props) {
         super(props);
     }
  render() {
    var card = this.props.card;
         return (
            <ListItem style={styles.containerList} >
              <TouchableHighlight onPress= {() => this.gotoNext(card)}>
                      <View style={styles.outerShell}>
                          <View style={styles.cardItem}>
                            <Image
                                style={styles.imgThumb}
                                source={{uri: card.image_url}} >
                                <View style={styles.cardDesc}>
                                  <View style={styles.cardDescInside}>
                                    <Text style={styles.cardTitle}>{card.title}</Text>
                                    <View style={styles.postDetails}>
                                      <Text style={styles.userName}>Srihari</Text>
                                      <Text style={styles.userName}>07 Nov 2016</Text>
                                    </View>
                                  </View>
                                </View>
                              </Image>
                          </View>
                      </View>
              </TouchableHighlight>
            </ListItem>
            )
    }
  gotoNext(card) {
    console.log("gotoNext")
    this.props.navigator.push({
      id: 'ArticleShow',
      name: 'ArticleShow',
      data: card

    });
  }
}
module.exports = CardShow;
