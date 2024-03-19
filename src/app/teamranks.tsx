import { View, Text, FlatList } from 'react-native';
import teamranking from '../../assets/data/teamranking.json';
import TeamRankingListItem from '../components/TeamRankingListItem';

const rankings = teamranking.data.rankings.response;
const TeamRankingsScreen = () => {
  return (
    <FlatList
      contentContainerStyle={{ gap: 10 }}
      data={rankings}
      renderItem={({ item }) => <TeamRankingListItem item={item} />}
    />
  );
};

export default TeamRankingsScreen;
