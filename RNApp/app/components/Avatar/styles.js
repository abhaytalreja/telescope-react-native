import { StyleSheet } from 'react-native';

const size = 100;
const smallSize = 24;
export default StyleSheet.create({
  avatar: {
    width: size,
    height: size,
    borderRadius: size / 2,
    borderWidth: 3,
    borderColor: '#FFFFFF',
  },
  smallAvatar: {
    width: smallSize,
    height: smallSize,
    borderRadius: smallSize / 2,
    borderWidth: 3,
    borderColor: '#FFFFFF',
  },
});
