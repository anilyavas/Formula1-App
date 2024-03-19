import { View, Text, StyleSheet, Image } from 'react-native';

const ChampionshipDriverList = ({ item }: { item: any }) => {
  return (
    <View style={styles.container}>
      <View style={{ width: 40, height: 40, justifyContent: 'center' }}>
        <Text style={styles.position}>{item.position}</Text>
      </View>
      <Image
        source={{ uri: item.driver.image }}
        style={{ width: 50, height: 50, marginRight: 5 }}
        resizeMode='contain'
      />
      <View style={{ padding: 5, flex: 1, marginVertical: 10 }}>
        <Text style={styles.driver}>{item.driver.name}</Text>
        <Text style={styles.team}>{item.team.name}</Text>
      </View>
      <Text style={styles.points}>{item.points}</Text>
    </View>
  );
};

export default ChampionshipDriverList;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  position: {
    fontFamily: 'F1-Bold',
    textAlign: 'center',
  },
  driver: {
    fontFamily: 'F1-Bold',
    paddingBottom: 5,
  },
  team: {
    color: 'grey',
    fontFamily: 'F1-Regular',
  },
  points: {
    fontFamily: 'F1-Bold',
    paddingRight: 20,
  },
});
