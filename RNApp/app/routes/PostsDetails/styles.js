import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../config/styles';

const window = Dimensions.get('window');
const MARGIN_HORIZONTAL = 10;
const cardSize = (window.width - (MARGIN_HORIZONTAL * 4)) / 2;

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
    justifyContent: 'center',
  },
  imageFull: {
    flexDirection: 'row',
    width: cardSize,
    height: cardSize,
    marginBottom: 20,
    marginTop: 20,
  },
  titleRow: {
    paddingLeft: 20,
    paddingRight: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
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
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  body: {
    fontSize: 20,
    paddingRight: 10,
    fontWeight: 'bold',
  }
});
