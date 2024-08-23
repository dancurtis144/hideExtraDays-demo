import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet}  from 'react-native';

import Calendar from '@/components/Calendar';

export default function TabTwoScreen() {
  return (
    <Calendar />
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
