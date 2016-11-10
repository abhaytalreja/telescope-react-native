import React from 'react';
import { Text, View } from 'react-native';
import Button from '../../components/Button';
import styles from './styles';
import PostsHome from '../Posts/PostsHome';

const Home = (props) => {
  return (
    <View style={styles.container}>
      <PostsHome navigator={props.navigator} selector={{}}/>
    </View>
  );
};

Home.propTypes = {
  onDetailsPress: React.PropTypes.func,
  navigator: React.PropTypes.object,
};

export default Home;
