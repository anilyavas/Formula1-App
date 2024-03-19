import { View, Text, StyleSheet, Image } from 'react-native';

const TeamRankingListItem = ({ item }: { item: any }) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          width: 40,
          height: 40,
          justifyContent: 'center',
          margin: 10,
        }}
      >
        <Text style={styles.position}>{item.position}</Text>
      </View>
      <Image
        source={{ uri: item.team.logo }}
        style={{ width: 50, height: 50, marginRight: 10 }}
        resizeMode='contain'
      />
      <View style={{ flex: 1 }}>
        <Text style={styles.teamName}>{item.team.name}</Text>
      </View>
      <View style={{ paddingRight: 20 }}>
        <Text style={styles.points}>{item.points}</Text>
      </View>
    </View>
  );
};

export default TeamRankingListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  position: {
    fontFamily: 'F1-Bold',
  },
  teamName: {
    fontFamily: 'F1-Regular',
  },
  points: {
    fontFamily: 'F1-Bold',
  },
});
