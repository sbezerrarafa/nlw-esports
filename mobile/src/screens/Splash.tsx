import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

interface Props {
  navigation: any;
}
export default class Splash extends React.Component<Props> {
  componentDidMount = () => {
    setTimeout(() => {
      this.props.navigation.navigate('Home');
    }, 3000);
  };
  render() {
    return (
      <View style={style.container}>
        <Image source={require('../assets/splash.png')} style={style.image} />
        <Text style={{color: '#fff'}}>pegou</Text>
      </View>
    );
  }
}
const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
  },
});
