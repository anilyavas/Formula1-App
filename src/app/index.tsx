import { StatusBar } from 'expo-status-bar';
import {
  FlatList,
  StyleSheet,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import racesResponse from '../../assets/data/races.json';
import { RaceListItem } from '../components/RaceListItem';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
const races = racesResponse.data.races.response;

export default function App() {
  const [fontsLoaded] = useFonts({
    'F1-Black': require('../../assets/fonts/Formula1-Black.ttf'),
    'F1-Bold': require('../../assets/fonts/Formula1-Bold-4.ttf'),
    'F1-Regular': require('../../assets/fonts/Formula1-Regular-1.ttf'),
  });

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen
        options={{
          title: 'RACING',
          headerTitleStyle: { fontFamily: 'F1-Black', color: 'white' },
        }}
      />
      <FlatList
        data={races}
        renderItem={({ item }) => <RaceListItem item={item} />}
      />
      <StatusBar style='auto' />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'whitesmoke',
  },
});
