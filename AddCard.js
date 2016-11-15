'use strict';

import React, { Component, PropTypes } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Input, InputGroup, Button, Icon, List, ListItem } from 'native-base';
import { ScrollView, Text, TouchableHighlight, Image,TextInput, View, ListView, StyleSheet,AlertIOS } from 'react-native';
var REQUEST_URL = 'https://cardbox-api.herokuapp.com/cards.json';

var styles = require('./Stylesheet');


class AddCard extends Component {
  constructor(props) {
   super(props);
    this.state = {
      title: '',
      content: '',
      img_url: '',
    };
  }
  render() {

    return (
      <Container>
        <Header style={styles.header}>
          <Button transparent onPress= {() => this.props.onBack()}>
              <Icon style={{color: '#fff'}} name='ios-arrow-back' />
          </Button>
          <Title>Mission2</Title>
        </Header>
        <Content style={styles.containerEdit}>
          <View style={styles.cardAddContainer}>
            <View style={styles.cardAddTitlePanel}>
              <Text style={styles.cardAddTitle1}>Create your</Text>
              <View style={{width: 190, height: 1, backgroundColor: '#fff', marginTop: 15}} />
              <Text style={styles.cardAddTitle2}>Content</Text>
            </View>
          </View>
          <List style={styles.formContainer}>
              <Text style={styles.placeholder}>Title</Text>
              <ListItem style={{ marginBottom: 20,marginLeft: 0, paddingLeft: 0}}>
                  <InputGroup style={{borderWidth: 0, paddingLeft: 0}}>
                      <Input style={styles.formInput} onChangeText={(title) => this.setState({title})}  />
                  </InputGroup>
              </ListItem>
          
              <Text style={styles.placeholder}>Content</Text>
              <ListItem style={{ marginBottom: 20,marginLeft: 0, paddingLeft: 0}}>
                  <InputGroup style={{ borderWidth: 0, paddingLeft: 0}} >
                      <Input style={styles.formInput} onChangeText={(content) => this.setState({content})}  />
                  </InputGroup>
              </ListItem>

              <Text style={styles.placeholder}>Image Url</Text>
              <ListItem style={{ marginBottom: 20, marginLeft: 0, paddingLeft: 0}}>
                  <InputGroup style={{borderWidth: 0, paddingLeft: 0}} >
                      <Input style={styles.formInput} onChangeText={(image_url) => this.setState({image_url})}  />
                  </InputGroup>
              </ListItem>
          </List>
          <View style={styles.footerPanel}>
            <Button block style={styles.submitButton} onPress= {() => this.postData()}  >
                CREATE ARTICLE
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
  postData(){
    fetch("https://cardbox-api.herokuapp.com/cards.json", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: this.state.title,
        content: this.state.content,
        image_url: this.state.image_url
      })
    }).then(function(returnedValue) {
    }).catch(function(err) {
      AlertIOS.alert(
        'Error '+ err )
    }); 
    this.gotoHome();
  }
  gotoHome() {
      console.log("gotoNext")
      this.props.navigator.push({
        id: 'SplashPage',
        name: 'SplashPage'

      });
    }
  
}

module.exports = AddCard;
