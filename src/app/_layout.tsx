import { Stack } from 'expo-router';
import { Colors } from '../Constants/colors';
import { useFonts } from 'expo-font';
import { ActivityIndicator } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const RootLayout = () => {
  const [fontsLoaded] = useFonts({
    'F1-Black': require('../../assets/fonts/Formula1-Black.ttf'),
    'F1-Bold': require('../../assets/fonts/Formula1-Bold_web.ttf'),
    'F1-Italic': require('../../assets/fonts/Formula1-Italic.ttf'),
    'F1-Regular': require('../../assets/fonts/Formula1-Regular-1.ttf'),
    'F1-Wide': require('../../assets/fonts/Formula1-Wide.ttf'),
  });

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }

  return (
    <>
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: Colors.primary },
          headerTitleStyle: { fontFamily: 'F1-Bold', color: 'white' },
          headerTintColor: 'white',
        }}
      >
        <Stack.Screen
          name='index'
          options={{
            title: 'RACING',
          }}
        />
      </Stack>
      <StatusBar style='light' />
    </>
  );
};

export default RootLayout;
