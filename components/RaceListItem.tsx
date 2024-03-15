import { Text, View, StyleSheet } from 'react-native';
import racesResponse from '../assets/data/races.json';

const races = racesResponse.data.races.response;

export const RaceListItem = ({ item }: { item: (typeof races)[0] }) => {
  return (
    <View style={styles.itemContainer}>
      <Text>{item.competition.location.country}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  itemContainer: {
    padding: 10,
    margin: 5,
    backgroundColor: 'white',
  },
});
