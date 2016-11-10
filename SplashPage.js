'use strict';

import React, { Component, PropTypes } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, List, ListItem } from 'native-base';
import { ScrollView, Text, TouchableHighlight, Image, View,RefreshControl, ListView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
var REQUEST_URL = 'https://cardbox-api.herokuapp.com/cards.json';
var MainPage = require('./MainPage');
var AddCard = require('./AddCard');

const styles = StyleSheet.create({
    containerSplash: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  welcome: {
    fontSize: 35,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
  },
  cardItem: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  imgThumb: {
    width: 50, 
    height: 50,
    marginRight : 20
  },
})


class SplashPage extends Component {
  constructor(props) {
         super(props);
           this.state = {
             isLoading: true,
             dataSource: new ListView.DataSource({
                 rowHasChanged: (row1, row2) => row1 !== row2,
             }),
              tab1: true,
              tab2: false,
              refreshing: false,
         };
     }
  renderCard(card) {
    var img = card.image_url;
         return (
            <ListItem >
              <TouchableHighlight onPress= {() => this.gotoNext(card)}>
                      <View>
                          <View style={styles.cardItem}>
                            <Image
                                style={styles.imgThumb}
                                source={{uri: "https://i.imgur.com/YuO1fji.jpg"}}  />
                              <Text style={{fontSize: 25, flex: 1, }}>{card.title}</Text>
                          </View>
                      </View>
              </TouchableHighlight>
            </ListItem>
         );
     }
  componentDidMount() {
         this.fetchData();
     }
 
  fetchData() {
    console.log("fetchData");
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
  _onRefresh() {
    this.setState({refreshing: true});
    fetchData().then(() => {
      console.log("fetch data done")
      this.setState({refreshing: false});
    });
  }
  render() {
         if (this.state.isLoading) {
             return this.renderLoadingView();
         }
         if(this.state.tab1){

          var viewScene = (
              <List>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderCard.bind(this)} 
                    refreshControl={
                      <RefreshControl
                        refreshing={this.state.refreshing}
                        onRefresh={this._onRefresh.bind(this)}
                        tintColor="#ff0000"
                        title="Loading..."
                        titleColor="#00ff00"
                        colors={['#ff0000', '#00ff00', '#0000ff']}
                        progressBackgroundColor="#ffff00"  />
                         }/>
              </List>
            )
         } else {
          var viewScene = (
              <MainPage />
            )
         }
         console.log("asd")
         return (
            <Container> 
              <Header>
                <Button transparent onPress= {() => this.gotoAddCard()}>
                    <Icon name='plus' size={20} color="#4078c0" />
                </Button>
                <Title>Mission2</Title>
              </Header>
              <Content>
                {viewScene}
              </Content>

              <Footer>
                  <FooterTab>
                    <Button active={this.state.tab1} onPress={() => this.toggleTab1()} >
                        Cards
                    </Button>
                    <Button active={this.state.tab2} onPress={() => this.toggleTab2()} >
                        Profile
                    </Button>
                  </FooterTab>
              </Footer>
            </Container>
          );
  }  
    
  renderLoadingView() {
      return (
      <View style={styles.containerSplash}>
        <Text style={styles.welcome}>
          Mission2!
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
  gotoAddCard() {
    this.props.navigator.push({
      id: 'AddCard',
      name: 'AddCard',

    });
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



module.exports = SplashPage;
