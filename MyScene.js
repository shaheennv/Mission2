import React, { Component, PropTypes } from 'react';
import { ScrollView, Text, TouchableHighlight, Image } from 'react-native';

export default class MyScene extends Component {
  static propTypes = {
    nextIndex: PropTypes.number.isRequired,
    onForward: PropTypes.func.isRequired,
    onBack: PropTypes.func.isRequired,
  }

  render() {
    var card = this.props;
    console.log("card" + card);
    return (
      <ScrollView style={{marginTop: 50, borderWidth : 1, backgroundColor: 'white'}}>
        <Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
           style={{width: 400, height: 400}} />
        <Text style={{fontSize: 35, color: 'crimson'}}></Text>
        <Text style={{}}></Text>
        <TouchableHighlight style={{alignItems: 'flex-end'}} >
          <Text>Next Card</Text>
        </TouchableHighlight>
        <TouchableHighlight style={{alignItems: 'flex-start'}} >
          <Text>Prev Card</Text>
        </TouchableHighlight>
      </ScrollView>
    )
  }
}