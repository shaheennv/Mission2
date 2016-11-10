'use strict';

import React, { Component, PropTypes } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Input, InputGroup, Button, Icon, List, ListItem } from 'native-base';
import { ScrollView, Text, TouchableHighlight, Image,TextInput, View, ListView } from 'react-native';
var REQUEST_URL = 'https://cardbox-api.herokuapp.com/cards.json';

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
    return (
      <Container>
        <Header>
          <Button transparent onPress= {() => this.props.onBack()}>
              <Icon name='ios-arrow-back' />
          </Button>
          <Title>Mission2</Title>
        </Header>
        <Content>
          <List>
              <ListItem>
                  <InputGroup>
                      <Input placeholder='Title' defaultValue ={card.title} onChangeText={(title) => this.setState({title})}  />
                  </InputGroup>
              </ListItem>
          
              <ListItem>
                  <InputGroup >
                      <Input placeholder='Content' defaultValue={card.content} onChangeText={(content) => this.setState({content})}  />
                  </InputGroup>
              </ListItem>
              <ListItem>
                  <InputGroup >
                      <Input placeholder='Image Url' defaultValue={card.image_url} onChangeText={(image_url) => this.setState({image_url})}  />
                  </InputGroup>
              </ListItem>
          </List>
        </Content>
        <Footer>
            <FooterTab>
              <Button danger onPress= {() => this.deleteData(card.id)}  >
                  Delete
              </Button>
              <Button active onPress= {() => this.updateData(card.id)}  >
                  Submit
              </Button>
            </FooterTab>
        </Footer>
      </Container>
    );
  }
  deleteData(id){
    fetch("https://cardbox-api.herokuapp.com/cards/"+ id +".json", {
      method: 'DELETE',
    })    
  }
  updateData(id){
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
    })
    
  }
}

module.exports = EditCard;
