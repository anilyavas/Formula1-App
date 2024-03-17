import { useLocalSearchParams } from 'expo-router';
import { View, Text, StyleSheet, Image, ActivityIndicator } from 'react-native';
import { Colors } from '../../../Constants/colors';
import { useQuery, gql } from '@apollo/client';

const query = gql`
  query MyQuery($id: Int) {
    races(id: $id) {
      response {
        id
        date
        season
        circuit {
          id
          image
        }
        competition {
          name
          location {
            country
          }
        }
      }
    }
  }
`;
const RaceDetails = () => {
  const { id } = useLocalSearchParams();
  const { data, loading, error } = useQuery(query, { variables: { id: id } });

  if (loading) {
    return <ActivityIndicator />;
  }
  if (error) {
    return <Text>Failed to fetch data</Text>;
  }
  const race = data.races.response[0];

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
      <View style={styles.raceDetails}>
        <View style={styles.largeBox}>
          <Text style={styles.title}>Circuit lenght</Text>
          <Text style={styles.subtitle}>
            4303
            <Text style={{ fontSize: 16 }}> KM</Text>
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            margin: 10,
            width: '100%',
          }}
        >
          <View style={styles.smallBox}>
            <Text style={styles.title}>No of laps</Text>
            <Text style={styles.subtitle}>71</Text>
          </View>
          <View style={styles.smallBox}>
            <Text style={styles.title}>First Grand Prix</Text>
            <Text style={styles.subtitle}>1963</Text>
          </View>
        </View>
        <View style={styles.largeBoxes}>
          <Text style={styles.title}>Race distance</Text>
          <Text style={styles.subtitle}>{race.distance}</Text>
        </View>
        <View style={styles.largeBoxes}>
          <Text style={styles.title}>Lap record</Text>
          <Text style={styles.subtitle}>1:17.774</Text>
          <Text style={{ color: 'dimgrey', paddingTop: 5 }}>
            Valtteri Bottas (2021)
          </Text>
        </View>
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
  raceDetails: {},
  largeBox: {
    margin: 10,
    padding: 10,
    borderTopColor: Colors.primary,
    borderTopWidth: 5,
    borderRadius: 10,
    borderRightColor: Colors.primary,
    borderRightWidth: 5,
  },
  smallBox: {
    borderBottomColor: 'gainsboro',
    borderBottomWidth: 3,
    borderRightColor: 'gainsboro',
    borderRightWidth: 3,
    borderRadius: 10,
    width: '48%',
    padding: 10,
  },
  largeBoxes: {
    margin: 10,
    padding: 10,
    borderBottomColor: 'gainsboro',
    borderBottomWidth: 5,
    borderRadius: 10,
    borderRightColor: 'gainsboro',
    borderRightWidth: 5,
  },
  title: {
    color: 'grey',
    fontFamily: 'F1-Regular',
    fontSize: 14,
    marginBottom: 5,
  },
  subtitle: {
    fontFamily: 'F1-Bold',
    fontSize: 25,
  },
});
