import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Game} from '../screens/Game';

import {Home} from '../screens/Home';
import Splash from '../screens/Splash';

const {Navigator, Screen} = createNativeStackNavigator();

export const AppRoutes = () => {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="Splash" component={Splash} />
      <Screen name="Home" component={Home} />
      <Screen name="Game" component={Game} />
    </Navigator>
  );
};
