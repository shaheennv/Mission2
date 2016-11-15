'use strict';

import React, { Component, PropTypes } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, List, ListItem,Spinner } from 'native-base';
import { ScrollView, Text, TouchableHighlight, Image, View,RefreshControl, ListView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
var REQUEST_URL = 'https://cardbox-api.herokuapp.com/cards.json';
var MainPage = require('./MainPage');
var AddCard = require('./AddCard');
var CardShow = require('./CardShow');
var styles = require('./Stylesheet');



class SplashPage extends Component {
  constructor(props) {
         super(props);
           this.state = {
             isLoading: true,
             dataSource: new ListView.DataSource({
                 rowHasChanged: (row1, row2) => row1 !== row2,
             }),
              refreshing: false,
         };
     }
  renderCard(card) {
    var img = card.image_url;
         return (
            <CardShow card={card} navigator={this.props.navigator}  />
         );
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

 _onRefresh(){
    console.log("done");
    }
  render() {
         if (this.state.isLoading) {
             return this.renderLoadingView();
         }
         return (
            <Container> 
              <Header style={styles.header}>
                <Button transparent onPress= {() => this.gotoHome()}>
                  <Icon style={{color: '#fff', fontSize: 20}} name="refresh" />
                </Button>
                <Title style={styles.headerTitle}>Mission2</Title>
                <Button textStyle={{color: '#fff',alignItems: 'flex-end'}} transparent onPress= {() => this.gotoAddCard()}>
                    ADD
                </Button>
              </Header>
              <Content style={styles.container}>
                <List>
                  <ListView
                    initialListSize={1}
                    enableEmptySections={true}
                    emptyView={this._renderEmptyView}
                    scrollEnabled={false}
                    keyboardShouldPersistTaps={true}
                    refreshControl={
                      <RefreshControl
                        refreshing={this.state.refreshing}
                        onRefresh={this._onRefresh}
                        tintColor="#ff0000"
                        title="Loading..."
                        titleColor="#00ff00"
                        colors={['#ff0000', '#00ff00', '#0000ff']}
                        progressBackgroundColor="#ffff00" />
                    }
                    dataSource={this.state.dataSource}
                    renderRow={this.renderCard.bind(this)} />
                </List>
              </Content>
            </Container>
          );
  }  
  _renderEmptyView(){

    return (
      <View>
        <Text style={{color: 'white',marginTop: 200}}>No Cards available</Text>
      </View>
    )
  }
  renderLoadingView() {
      return (
      <View style={styles.containerSplash}>
          <Spinner color='white' />
          <Text style={styles.welcome}>Loading</Text>
      </View>
      );
  }

  gotoAddCard() {
    this.props.navigator.push({
      id: 'AddCard',
      name: 'AddCard',

    });
  } 
}



module.exports = SplashPage;
