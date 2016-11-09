import React from 'react';
import { Text, View } from 'react-native';
import Button from '../../components/Button';
import styles from './styles';
import Posts from '../Posts';

const Home = (props) => {
  console.log(props);
  return (
    <View style={styles.container}>
      <Posts navigator={props.navigator} currentLimit={10}/>
    </View>
  );
};

Home.propTypes = {
  onDetailsPress: React.PropTypes.func,
  navigator: React.PropTypes.object,
};

export default Home;
