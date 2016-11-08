'use strict';

import React, { Component, PropTypes } from 'react';
import { ScrollView, Text, TouchableHighlight, Image, View, ListView, StyleSheet } from 'react-native';
var REQUEST_URL = 'https://cardbox-api.herokuapp.com/cards.json';

const styles = StyleSheet.create({
  container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
  },
  cardItem: {
    flex: 1, 
    flexDirection: 'row'
  },
  imgThumb: {
    width: 50, 
    height: 50
  },
})


class SplashPage extends Component {
  renderCard(card) {
    var img = card.image_url;
         return (
              <TouchableHighlight onPress= {() => this.gotoNext(card)}>
                      <View>
                          <View style={styles.cardItem}>
                            <Image
                                style={styles.imgThumb}
                                source={{uri: "https://i.imgur.com/YuO1fji.jpg"}}  />
                              <Text style={{fontSize: 30}}>{card.title}</Text>
                          </View>
                      </View>
              </TouchableHighlight>
         );
     }
  constructor(props) {
         super(props);
           this.state = {
             isLoading: true,
             dataSource: new ListView.DataSource({
                 rowHasChanged: (row1, row2) => row1 !== row2
             })
         };
     }
  componentDidMount() {
         this.fetchData();
     }
 
  fetchData() {
     fetch(REQUEST_URL)
     .then((response) => response.json())
     .then((responseData) => {
         this.setState({
             dataSource: this.state.dataSource.cloneWithRows(responseData),
             isLoading: false
         });
     })
     .done();
  }
  render() {
         if (this.state.isLoading) {
             return this.renderLoadingView();
         }
         console.log("asd")
         return (
            <View>
              <ListView
                  dataSource={this.state.dataSource}
                  renderRow={this.renderCard.bind(this)} />
            </View>
          );
  }  
    
  renderLoadingView() {
      return (
          <View >
              <Text>
                  Loading books...
              </Text>
          </View>
      );
  }
  gotoNext(card) {
    console.log("gotoNext")
    this.props.navigator.push({
      id: 'CardList',
      name: 'CardList',
      data: card

    });
  }
}

module.exports = SplashPage;
