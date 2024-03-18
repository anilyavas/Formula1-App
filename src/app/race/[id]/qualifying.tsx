import { FlatList, ActivityIndicator } from 'react-native';
import { useQuery, gql } from '@apollo/client';
import { useGlobalSearchParams } from 'expo-router';
import QualifyingListItem from '../../../components/QualifyingListItem';

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
        position
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
      renderItem={({ item }) => <QualifyingListItem item={item} />}
    />
  );
};

export default QualifyingScreen;
