import { Text, View, StyleSheet, Pressable } from 'react-native';
import racesResponse from '../../assets/data/races.json';
import dayjs from 'dayjs';
import { Entypo } from '@expo/vector-icons';
import { Colors } from '../Constants/colors';
import { Link } from 'expo-router';

const races = racesResponse.data.races.response;

export const RaceListItem = ({
  item,
  round,
}: {
  item: (typeof races)[0];
  round: number;
}) => {
  return (
    <Link href={'/race'} asChild>
      <Pressable style={styles.itemContainer}>
        <View style={styles.dateContainer}>
          <Text style={styles.date}>
            {dayjs(item.date).subtract(2, 'days').format('DD')}-
            {dayjs(item.date).format('DD')}
          </Text>
          <Text style={styles.month}>
            {dayjs(item.date).format('MMM').toUpperCase()}
          </Text>
        </View>
        <View style={styles.raceInfo}>
          <Text style={styles.round}>Round {round}</Text>
          <Text style={styles.country}>
            {item.competition.location.country}
          </Text>
          <Text style={styles.name}>
            {item.competition.name} {item.season}
          </Text>
        </View>
        <Entypo name='chevron-right' size={24} color={Colors.primary} />
      </Pressable>
    </Link>
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
  date: {
    fontFamily: 'F1-Regular',
  },
  month: {
    backgroundColor: 'gainsboro',
    paddingVertical: 3,
    paddingHorizontal: 10,
    borderRadius: 10,
    overflow: 'hidden',
    color: 'dimgrey',
    marginTop: 5,
    fontFamily: 'F1-Bold',
  },
  round: {
    color: Colors.primary,
    fontFamily: 'F1-Regular',
  },
  country: {
    fontSize: 20,
    fontFamily: 'F1-Bold',
    marginVertical: 7,
  },
  name: {
    color: 'dimgrey',
  },
});
