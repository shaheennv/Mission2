'use strict';

import React, { Component, PropTypes } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, List, ListItem,Spinner } from 'native-base';
import { ScrollView, Text, TouchableHighlight, Image, View,RefreshControl, ListView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
var REQUEST_URL = 'https://cardbox-api.herokuapp.com/cards.json';
var MainPage = require('./MainPage');
var AddCard = require('./AddCard');
var CardShow = require('./CardShow');

const styles = StyleSheet.create({
  containerList: {
    marginLeft: 0,
    borderBottomWidth: 0,
    paddingRight: 0,
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
            <CardShow card={card} navigator={this.props.navigator}  />
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
                    renderRow={this.renderCard.bind(this)} />
              </List>
            )
         } else {
          var viewScene = (
              <MainPage />
            )
         }
         return (
            <Container> 
              <Header style={styles.header}>
                <Title style={styles.headerTitle}>Mission2</Title>
                <Button textStyle={{color: '#fff'}} transparent onPress= {() => this.gotoAddCard()}>
                    ADD
                </Button>
              </Header>
              <Content style={styles.container}>
                {viewScene}
              </Content>
            </Container>
          );
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
