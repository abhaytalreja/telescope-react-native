import React from 'react';
import { Text, View } from 'react-native';
import Button from '../../components/Button';
import styles from './styles';
import Posts from '../Posts';

// const PostsHome = (props) => {
class PostsHome extends React.Component {
  // console.log(props);
  constructor(props) {
    super(props);
  
    this.state = {currentLimit: 10, limit: 10};
  }
  updateCurrentLimit(){
    console.log('updateCurrentLimit in home called');
    let newLimit = this.state.currentLimit + this.state.limit;
    this.setState({currentLimit: newLimit});
  }
  render (){
    return (
      <View style={styles.container}>
        <Posts navigator={this.props.navigator} selector={this.props.selector} currentLimit={this.state.currentLimit} updateCurrentLimit={() => this.updateCurrentLimit()}/>
      </View>
    );
  }
};

PostsHome.propTypes = {
  onDetailsPress: React.PropTypes.func,
  navigator: React.PropTypes.object,
  selector: React.PropTypes.object,
};

export default PostsHome;
