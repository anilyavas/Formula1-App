import { useLocalSearchParams } from 'expo-router';
import { View, Text, StyleSheet, Image, ActivityIndicator } from 'react-native';
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
