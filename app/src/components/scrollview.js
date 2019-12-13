import React, { Component } from 'react';

import { View, ScrollView, StyleSheet } from 'react-native';

// import { Container } from './styles';

export default class components extends Component {
  render() {
    return 
    <ScrollView style={styles.scrollview}/>;    
  }
}

const styles = StyleSheet.create({
    scrollview: {
        color: 'orange',
    },
});


