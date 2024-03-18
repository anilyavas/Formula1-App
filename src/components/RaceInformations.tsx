import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { Colors } from '../Constants/colors';
import { useLocalSearchParams } from 'expo-router';
import { useQuery, gql } from '@apollo/client';

const query = gql`
  query MyQuery($id: Int!) {
    circuit(id: $id) {
      response {
        first_grand_prix
        race_distance
        length
        laps
        lap_record {
          driver
          time
          year
        }
      }
    }
  }
`;
const RaceInformations = () => {
  const { id } = useLocalSearchParams();
  const { data, loading } = useQuery(query, { variables: { id: id } });

  if (loading) {
    return <ActivityIndicator />;
  }
  const circuit = data?.circuit.response;
  return (
    <View style={styles.raceDetails}>
      <View style={styles.largeBox}>
        <Text style={styles.title}>Circuit lenght</Text>
        <Text style={styles.subtitle}>{circuit.lenght}</Text>
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
          <Text style={styles.subtitle}>{circuit.laps}</Text>
        </View>
        <View style={styles.smallBox}>
          <Text style={styles.title}>First Grand Prix</Text>
          <Text style={styles.subtitle}>{circuit.first_grand_prix}</Text>
        </View>
      </View>
      <View style={styles.largeBoxes}>
        <Text style={styles.title}>Race distance</Text>
        <Text style={styles.subtitle}>{circuit.race_distance}</Text>
      </View>
      <View style={styles.largeBoxes}>
        <Text style={styles.title}>Lap record</Text>
        <Text style={styles.subtitle}>{circuit.lap_record.time}</Text>
        <Text style={{ color: 'dimgrey', paddingTop: 5 }}>
          {circuit.lap_record.driver} {circuit.lap_record.year}
        </Text>
      </View>
    </View>
  );
};

export default RaceInformations;

const styles = StyleSheet.create({
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
