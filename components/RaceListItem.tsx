import { Text, View, StyleSheet } from 'react-native';
import racesResponse from '../assets/data/races.json';
import dayjs from 'dayjs';
import { Entypo } from '@expo/vector-icons';
import { Colors } from '../src/Constants/colors';

const races = racesResponse.data.races.response;

export const RaceListItem = ({ item }: { item: (typeof races)[0] }) => {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.dateContainer}>
        <Text style={styles.date}>{dayjs(item.date).format('DD')}-26</Text>
        <Text style={styles.month}>
          {dayjs(item.date).format('MMM').toUpperCase()}
        </Text>
      </View>
      <View style={styles.raceInfo}>
        <Text style={styles.round}>Round {item.competition.id}</Text>
        <Text style={styles.country}>{item.competition.location.country}</Text>
        <Text style={styles.name}>{item.competition.name}</Text>
      </View>
      <Entypo name='chevron-right' size={24} color={Colors.primary} />
    </View>
  );
};
const styles = StyleSheet.create({
  itemContainer: {
    padding: 10,
    margin: 5,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    //shadow
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
  },
  dateContainer: {
    padding: 10,
    margin: 10,
    alignItems: 'center',
    borderRightColor: 'gainsboro',
    borderRightWidth: 1,
  },
  raceInfo: {
    flex: 1,
  },
  date: {},
  month: {
    backgroundColor: 'gainsboro',
    paddingVertical: 3,
    paddingHorizontal: 10,
    borderRadius: 10,
    overflow: 'hidden',
    color: 'dimgrey',
    fontWeight: 'bold',
    marginTop: 5,
  },
  round: {
    color: Colors.primary,
  },
  country: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  name: {
    color: 'dimgrey',
  },
});
