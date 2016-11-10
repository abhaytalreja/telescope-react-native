import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../config/styles';

const window = Dimensions.get('window');
const MARGIN_HORIZONTAL = 10;
const cardSize = (window.width - (MARGIN_HORIZONTAL * 2)) / 2;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  list: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
  item: {
    backgroundColor: colors.buttonBackground,
    color: colors.buttonText,
    width: cardSize,
    height: cardSize,
    marginHorizontal: MARGIN_HORIZONTAL,
    marginVertical: 5,
    paddingTop: cardSize / 2.3,
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
    alignItems: 'center',
  },
  column : {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
  },
  timeAgo: {
    color: '#888',
    fontSize: 12,
  },
  imageFull: {
    flexDirection: 'row',
    height: cardSize,
    width: cardSize,
    marginBottom: 20,
    marginTop: 20,
    backgroundColor: '#fff',
  },
  titleRow: {
    padding: 5,
    paddingLeft: 20,
    paddingRight: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderTopWidth: 5,
    borderBottomWidth: 5,
    borderColor: '#fafafa',
  },
  titleRowDetails: {
    paddingLeft: 20,
    flexDirection: 'column'
  },
  title: {
    fontSize: 20,
    paddingRight: 10,
    fontWeight: 'bold',
  },
  bodyRow: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    margin: 10,
  },
  body: {
    fontSize: 14,
  }
});
