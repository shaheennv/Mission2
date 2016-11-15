'use strict';

import Swipeout from 'react-native-swipe-out';
import React, { Component, PropTypes } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, List, ListItem,Spinner } from 'native-base';
import { ScrollView, Text, TouchableHighlight, Image, View,RefreshControl, ListView, StyleSheet,AlertIOS } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
var REQUEST_URL = 'https://cardbox-api.herokuapp.com/cards.json';
var MainPage = require('./MainPage');
var AddCard = require('./AddCard');
var styles = require('./Stylesheet');

class CardShow extends Component {
  constructor(props) {
         super(props);
         this.state = {touchableAction: false};
     }
  alertDelete(id){
    AlertIOS.alert(
     'Delete',
     'Do you want to delete?',
     [
       {text: 'Cancel', onPress: () => '' },
       {text: 'Delete', onPress: () => this.deleteData(id) },
     ],
    );
  }
  render() {
    var card = this.props.card;
    var id = card.id
    var updated_at = card.updated_at.substring(0, 10).split("-");
var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var month = monthNames[updated_at[1]-1];
    var date = updated_at[2];
    var year = updated_at[0];
    var touchableAction = this.props.touchableAction;
    let swipeBtns = [{
      text: 'Delete',
      backgroundColor: 'red',
      onPress: () => { this.alertDelete(id) }
    }];
         return (
          <Swipeout autoClose={true} right={swipeBtns} style={{padding: 0, height: 250}}>
            <ListItem style={styles.containerList} >
              <TouchableHighlight onPress= {() => ((touchableAction) ? this.gotoNext(card): '')}>
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
                                      <Text style={styles.userName}>{date} {month} {year}</Text>
                                    </View>
                                  </View>
                                </View>
                              </Image>
                          </View>
                      </View>
              </TouchableHighlight>
            </ListItem>
            </Swipeout>
            )
    }
    gotoHome() {
      console.log("gotoNext")
      this.props.navigator.push({
        id: 'SplashPage',
        name: 'SplashPage'

      });
    }
  deleteData(id){
    fetch("https://cardbox-api.herokuapp.com/cards/"+ id +".json", {
      method: 'DELETE',
    })   
    this.gotoHome(); 
  }
  gotoNext(card) {
    this.props.navigator.push({
      id: 'ArticleShow',
      name: 'ArticleShow',
      data: card

    });
  }
}
module.exports = CardShow;
