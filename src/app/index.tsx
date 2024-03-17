import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, SafeAreaView } from 'react-native';
import racesResponse from '../../assets/data/races.json';
import { RaceListItem } from '../components/RaceListItem';

const races = racesResponse.data.races.response;

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
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
