import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Tabs, withLayoutContext } from 'expo-router';

const Tab = createMaterialTopTabNavigator();
const TopTabs = withLayoutContext(Tab.Navigator);

const RaceLayout = () => {
  return <TopTabs />;
};

export default RaceLayout;