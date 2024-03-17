import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { withLayoutContext, Stack } from 'expo-router';
import { Colors } from '../../../Constants/colors';

const Tab = createMaterialTopTabNavigator();
const TopTabs = withLayoutContext(Tab.Navigator);

const RaceLayout = () => {
  return (
    <>
      <Stack.Screen
        options={{ title: 'Race Details', headerBackTitleVisible: false }}
      />
      <TopTabs
        screenOptions={{
          tabBarLabelStyle: { fontFamily: 'F1-Bold' },
          tabBarStyle: { backgroundColor: Colors.primary },
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: 'gainsboro',
          tabBarIndicatorStyle: {
            backgroundColor: 'white',
            height: 5,
          },
        }}
      />
    </>
  );
};

export default RaceLayout;
