import { View, Text, StyleSheet, Image } from 'react-native';
import raceRankingResponse from '../../assets/data/race-rankings.json';

const raceRankings = raceRankingResponse.data.raceRankings.response;

type RankingListItemProps = {
  item: (typeof raceRankings)[0];
};
const RankingListItem = ({ item }: RankingListItemProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.position}>{item.position}</Text>
      <Image
        source={{ uri: item.driver.image }}
        style={styles.driverImage}
        resizeMode='cover'
      />
      <View style={{ flex: 1 }}>
        <Text style={styles.name}>{item.driver.name}</Text>
        <Text style={styles.team}>{item.team.name}</Text>
      </View>
      <Text style={styles.time}>{item.time}</Text>
    </View>
  );
};

export default RankingListItem;
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
    backgroundColor: 'white',
    flexDirection: 'row',
    margin: 5,
    borderRadius: 5,
    alignItems: 'center',
    //shadow
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
  },
  position: {
    fontFamily: 'F1-Wide',
    width: 45,
    textAlign: 'center',
  },
  name: {
    fontFamily: 'F1-Bold',
    marginBottom: 5,
  },
  driverImage: {
    height: 70,
    marginRight: 10,
    aspectRatio: 1,
  },
  team: {},
  time: {
    backgroundColor: 'gainsboro',
    paddingVertical: 3,
    paddingHorizontal: 10,
    borderRadius: 10,
    overflow: 'hidden',
    color: 'dimgrey',
    marginTop: 5,
    fontSize: 12,
    fontWeight: '500',
  },
});
