import { StyleSheet } from 'react-native';
import { colors } from '../../config/styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  main: {
    fontSize: 20,
    color: colors.headerText,
    fontWeight: '400',
    fontStyle: 'italic',
  },
  row: {
    padding: 10,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#F6F6F6',
    marginRight: 10,
    justifyContent: 'space-around',
  },
  postsCategories: {
    color: '#f2784b',
  },
  thumb: {
    width: 64,
    height: 64,
    marginLeft: 5,
    maxWidth: 64,
    minWidth: 64,
  },
  titleRow: {
    paddingLeft: 40,
    paddingRight: 40,
  },
  likeButton: {

  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
  },
  rowGrid: {
    backgroundColor: 'red',
  },
  thumbGrid: {
    width: 200,
    height: 200,
  },
  titleGrid: {
    color: 'brown',
  },
  postCategoryStyle: {
    flexDirection: 'row',
    backgroundColor: 'green',
  }
});
