import React, { Component, PropTypes } from 'react';
import { ScrollView, Text,StyleSheet, TouchableHighlight, Image, View, ListView } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Icon, List, ListItem } from 'native-base';
var CardShow = require('./CardShow');

class ArticleShow extends Component {

  render(){
    var card = this.props.card;
    return(
        <Container style={{backgroundColor: '#FFF'}}> 
          <Header style={styles.header}>
            <Button textStyle={{color: '#fff'}} transparent onPress= {() => this.props.onBack()}>
                <Icon style={{color: "white"}} name='ios-arrow-back' />
            </Button>
            <Button textStyle={{color: '#fff'}} transparent onPress= {() => this.onEdit(card)}>
                Edit
            </Button>
          </Header>
          <Content style={styles.container}>
            <CardShow card={card} navigator={this.props.navigator} />
            <Text style={styles.content}>{card.content}</Text>
          </Content>
        </Container>
      )
  }
    onEdit(card) {
    this.props.navigator.push({
      id: 'EditCard',
      name: 'EditCard',
      data: card,
    });
  } 
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
  },
  headerTitle: {
    color: '#fff',
  },
  header: {
    backgroundColor: '#000',
  },
  img: {
    width: 200,
    height: 200,
  },
  content: {
    color: '#fff',
    margin: 20,
  }
})

module.exports = ArticleShow;
