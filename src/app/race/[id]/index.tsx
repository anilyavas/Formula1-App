import { useLocalSearchParams } from 'expo-router';
import { View, Text } from 'react-native';

const RaceDetails = () => {
  const { id } = useLocalSearchParams();

  return (
    <View>
      <Text>RaceDetails</Text>
    </View>
  );
};

export default RaceDetails;
