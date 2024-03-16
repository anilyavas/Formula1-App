import { StatusBar } from 'expo-status-bar';
import {
  FlatList,
  StyleSheet,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import racesResponse from '../../assets/data/races.json';
import { RaceListItem } from '../components/RaceListItem';
import { Stack } from 'expo-router';

const races = racesResponse.data.races.response;

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen
        options={{
          title: 'RACING',
        }}
      />
      <FlatList
        data={races}
        renderItem={({ item, index }) => (
          <RaceListItem item={item} round={index + 1} />
        )}
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
