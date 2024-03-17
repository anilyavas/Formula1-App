import { StatusBar } from 'expo-status-bar';
import {
  FlatList,
  StyleSheet,
  SafeAreaView,
  ActivityIndicator,
  Text,
} from 'react-native';
import { RaceListItem } from '../components/RaceListItem';
import { useQuery, gql } from '@apollo/client';

const query = gql`
  query MyQuery($season: String!, $type: String!) {
    races(season: $season, type: $type) {
      response {
        id
        date
        season
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

export default function HomeScreen() {
  const { data, loading, error } = useQuery(query, {
    variables: { season: '2024', type: 'RACE' },
  });

  if (loading) {
    return <ActivityIndicator />;
  }
  if (error) {
    return <Text>Failed to fetch Races. {error.message}</Text>;
  }
  const races = data.races.response;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={races}
        renderItem={({ item, index }) => (
          <RaceListItem item={item} round={index + 1} />
        )}
      />
      <StatusBar style='light' />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'whitesmoke',
  },
});
