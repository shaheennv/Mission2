'use strict';

import React, { Component, PropTypes } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Input, InputGroup, Button, Icon, List, ListItem } from 'native-base';
import { ScrollView, Text, TouchableHighlight, Image,TextInput, View, ListView,AlertIOS,StyleSheet } from 'react-native';
var REQUEST_URL = 'https://cardbox-api.herokuapp.com/cards.json';

var styles = require('./Stylesheet');
class EditCard extends Component {
  constructor(props) {
         super(props);
           this.state = {
              title: this.props.card.title,
              content: this.props.card.content,
              image_url: this.props.card.image_url,
         };
     }
  render() {
    var card = this.props.card;
    var navigator = this.props.navigator;
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
              <Text style={styles.cardAddTitle1}>Edit your</Text>
              <View style={{width: 190, height: 1, backgroundColor: '#fff', marginTop: 15}} />
              <Text style={styles.cardAddTitle2}>Content</Text>
            </View>
          </View>
          <List style={styles.formContainer}>
              <Text style={styles.placeholder}>Title</Text>
              <ListItem style={{ marginBottom: 20,marginLeft: 0, paddingLeft: 0}}>
                  <InputGroup style={{borderWidth: 0, paddingLeft: 0}}>
                      <Input  defaultValue ={card.title} style={styles.formInput} onChangeText={(title) => this.setState({title})}  />
                  </InputGroup>
              </ListItem>
          
              <Text style={styles.placeholder}>Content</Text>
              <ListItem style={{ marginBottom: 20,marginLeft: 0, paddingLeft: 0}}>
                  <InputGroup style={{ borderWidth: 0, paddingLeft: 0}} >
                      <Input defaultValue={card.content} style={styles.formInput} onChangeText={(content) => this.setState({content})}  />
                  </InputGroup>
              </ListItem>

              <Text style={styles.placeholder}>Image Url</Text>
              <ListItem style={{ marginBottom: 20, marginLeft: 0, paddingLeft: 0}}>
                  <InputGroup style={{borderWidth: 0, paddingLeft: 0}} >
                      <Input defaultValue={card.image_url} style={styles.formInput} onChangeText={(image_url) => this.setState({image_url})}  />
                  </InputGroup>
              </ListItem>
          </List>
        </Content>
        <Footer style={{borderColor: '#000',height: 70}}>
              <Button block style={styles.submitButton} onPress= {() =>  this.updateData(card.id,navigator)} >
                  <Text style={{fontFamily : 'Lato-Black', color: '#fff'}}>EDIT ARTICLE</Text>
              </Button>  
        </Footer>
      </Container>
    );
  }
    gotoHome() {
      console.log("gotoNext")
      this.props.navigator.push({
        id: 'SplashPage',
        name: 'SplashPage'

      });
    }
  updateData(id,navigator){
    fetch("https://cardbox-api.herokuapp.com/cards/"+ id +".json", {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: this.state.title,
        content: this.state.content,
        image_url: this.state.image_url
      })
    }).then(function(response) {
      navigator.push({
        id: 'SplashPage',
        name: 'SplashPage'

      });
      }).catch(function(err) {
      AlertIOS.alert(
        'Error '+ err )
      });
  }
}

module.exports = EditCard;
