import { Stack } from 'expo-router';
import { Colors } from '../Constants/colors';

const RootLayout = () => {
  return (
    <Stack
      screenOptions={{ headerStyle: { backgroundColor: Colors.primary } }}
    ></Stack>
  );
};

export default RootLayout;
