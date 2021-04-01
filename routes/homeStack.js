import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/home';
import Login from '../screens/login';
import Profile from '../screens/profile';
import Students from '../screens/students';

const screens = {
    Login: {
        screen: Login,
          navigationOptions: {
            headerShown: false,
          }
    },
    Home: {
        screen: Home,
        navigationOptions: {
          headerShown: false,
          }
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        headerShown: false,
        }
  },
  Students: {
    screen: Students,
    navigationOptions: {
      headerShown: false,
    }
  }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);