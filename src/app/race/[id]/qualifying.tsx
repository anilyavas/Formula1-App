import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import raceRankingResponse from '../../../../assets/data/race-rankings.json';
import RankingListItem from '../../../components/RankingListItem';
import { useQuery, gql } from '@apollo/client';
import { useGlobalSearchParams } from 'expo-router';

const query = gql`
  query MyQuery($id: String) {
    raceRankings(race: $id) {
      response {
        grid
        driver {
          id
          name
          image
        }
        team {
          id
          name
        }
      }
    }
  }
`;
const QualifyingScreen = () => {
  const { id } = useGlobalSearchParams();
  const { data, loading } = useQuery(query, { variables: { id: String(id) } });

  if (loading) {
    return <ActivityIndicator />;
  }

  const raceRankings = data?.raceRankings?.response;

  return (
    <FlatList
      data={raceRankings}
      renderItem={({ item }) => <RankingListItem item={item} />}
    />
  );
};

export default QualifyingScreen;
