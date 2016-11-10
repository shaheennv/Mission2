import React, { Component, PropTypes } from 'react';
import { ScrollView, Text,StyleSheet, TouchableHighlight, Image, View, ListView } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Icon, List, ListItem } from 'native-base';

class CardList extends Component {

  render(){
    var card = this.props.card;
    return(
        <Container style={{backgroundColor: '#FFF'}}> 
          <Header>
            <Button transparent onPress= {() => this.props.onBack()}>
                <Icon name='ios-arrow-back' />
            </Button>
            <Title>{card.title}</Title>
            <Button transparent onPress= {() => this.onEdit(card)}>
                Edit
            </Button>
          </Header>
          <Content>
            <View>
              <Image
                resizeMode = "contain"
                style={styles.img}
                source={{uri: card.image_url}}  />
              <Text>{card.content}</Text>
            </View>
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
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  img: {
    width: 200,
    height: 200,
  },
})

module.exports = CardList;
