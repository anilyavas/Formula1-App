import { useLocalSearchParams } from 'expo-router';
import { View, Text, StyleSheet, Image } from 'react-native';
import raceResponse from '../../../../assets/data/race.json';

const race = raceResponse.data.races.response[0];

const RaceDetails = () => {
  const { id } = useLocalSearchParams();

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.country}>{race.competition.location.country}</Text>
        <Text style={styles.season}> {race.season}</Text>
      </View>
      <View style={{ padding: 5 }}>
        <Text style={styles.name}>{race.circuit.name}</Text>
        <Image
          source={{ uri: race.circuit.image }}
          style={styles.circuit}
          resizeMode='contain'
        />
      </View>
    </View>
  );
};

export default RaceDetails;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 5,
  },
  country: {
    fontFamily: 'F1-Bold',
    fontSize: 20,
  },
  season: {
    fontFamily: 'F1-Regular',
    fontSize: 20,
  },
  name: {
    fontFamily: 'F1-Regular',
    paddingBottom: 10,
  },
  circuit: {
    width: '100%',
    aspectRatio: 16 / 9,
  },
});
