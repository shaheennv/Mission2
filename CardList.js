import React, { Component, PropTypes } from 'react';
import { ScrollView, Text, TouchableHighlight, Image, View, ListView } from 'react-native';

class CardList extends Component {
  renderCard(card) {
         return (
              <TouchableHighlight onPress= {() => this.gotoNext()}>
                  <View>
                      <View>
                          <Image
                              source={{uri: card.image_url}} style={{width: 100, height: 100}} />
                          <View>
                              <Text style={{fontSize: 30}}>{card.content}</Text>
                          </View>
                      </View>
                      <View />
                  </View>
              </TouchableHighlight>
         );
     }
  render(){
    var card = this.props.card;
    console.log(card);
    return(
        <View style={{marginTop: 50}}>
          <Text>{card.content}</Text>
        </View>
      )
  }
}

module.exports = CardList;
