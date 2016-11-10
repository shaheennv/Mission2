'use strict';

import React, { Component, PropTypes } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Input, InputGroup, Button, Icon, List, ListItem } from 'native-base';
import { ScrollView, Text, TouchableHighlight, Image,TextInput, View, ListView } from 'react-native';
var REQUEST_URL = 'https://cardbox-api.herokuapp.com/cards.json';

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
                      <Input placeholder='Title' onChangeText={(title) => this.setState({title})}  />
                  </InputGroup>
              </ListItem>
          
              <ListItem>
                  <InputGroup >
                      <Input placeholder='Content' onChangeText={(content) => this.setState({content})}  />
                  </InputGroup>
              </ListItem>
              <ListItem>
                  <InputGroup >
                      <Input placeholder='Image Url' onChangeText={(image_url) => this.setState({image_url})}  />
                  </InputGroup>
              </ListItem>
          </List>
        </Content>
        <Footer>
            <FooterTab>
              <Button onPress= {() => this.props.onBack()}  >
                  Cancel
              </Button>
              <Button active onPress= {() => this.postData()}  >
                  Submit
              </Button>
            </FooterTab>
        </Footer>
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
    })
    
  }
}

module.exports = AddCard;
