import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen40183Navigator from '../features/BlankScreen40183/navigator';
import BlankScreen40182Navigator from '../features/BlankScreen40182/navigator';
import BlankScreen40181Navigator from '../features/BlankScreen40181/navigator';
import BlankScreen40180Navigator from '../features/BlankScreen40180/navigator';
import BlankScreen40179Navigator from '../features/BlankScreen40179/navigator';
import Settings40164Navigator from '../features/Settings40164/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
BlankScreen40183: { screen: BlankScreen40183Navigator },
BlankScreen40182: { screen: BlankScreen40182Navigator },
BlankScreen40181: { screen: BlankScreen40181Navigator },
BlankScreen40180: { screen: BlankScreen40180Navigator },
BlankScreen40179: { screen: BlankScreen40179Navigator },
Settings40164: { screen: Settings40164Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
