import React from 'react';
import {StatusBar} from 'react-native';
import {Background} from './src/components/Background';
import {Routes} from './src/routes';
import {Home} from './src/screens/Home';

const App = () => {
  return (
    <Background>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {/* <Home /> */}
      <Routes />
    </Background>
  );
};

export default App;
