import { View, Text, FlatList, StyleSheet } from 'react-native';
import championship from '../../assets/data/championship.json';
import ChampionshipDriverList from '../components/ChampionshipList';

const rankings = championship.data.rankings.response;
const RankingsScreen = () => {
  return (
    <FlatList
      contentContainerStyle={{ gap: 10 }}
      data={rankings}
      renderItem={({ item }) => <ChampionshipDriverList item={item} />}
    />
  );
};

export default RankingsScreen;
const styles = StyleSheet.create({});
