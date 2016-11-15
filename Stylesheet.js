'use strict'
import React, { Component, PropTypes } from 'react';
import { StyleSheet } from 'react-native';


module.exports = StyleSheet.create({
  container: {
    margin: 0,
    backgroundColor: '#000',
  },
  containerEdit: {
    padding: 20,
    margin: 0,
    backgroundColor: '#000',
  },
  header: {
    backgroundColor: '#000',
  },
  cardAddContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 15,
  },
  cardAddTitlePanel: {
    width: 190,
    height: 65,
  },
  cardAddTitle1: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'Lato-Bold'
  },
  cardAddTitle2: {
    fontSize: 40,
    fontFamily: 'Lato',
    color: '#fff',
    marginTop: 5,
    textAlign: 'center',
  },
  formContainer: {
    marginTop: 60,
  },
  formInput: {
    backgroundColor: '#fff',
    borderWidth: 0,
    borderRadius: 5
  },
  placeholder: {
    color: '#fff',
    alignSelf: 'flex-start',
    marginBottom: 10,
    fontSize: 20,
    fontFamily: 'Lato-Regular',
  },
  footerPanel: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end'
  },
  submitButton: {
    height: 60, 
    backgroundColor: '#27AE60', 
    margin: 0,
  },
  containerList: {
    marginLeft: 0,
    borderBottomWidth: 0,
    paddingRight: 0,
    backgroundColor: '#000',
    paddingTop: 0,
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
  },
  content: {
    color: '#fff',
    margin: 20,
  },


















})

