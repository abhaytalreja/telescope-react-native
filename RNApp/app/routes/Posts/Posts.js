import React from 'react';
import { Image, Text, View, ListView, StyleSheet, TouchableOpacity, TouchableHighlight } from 'react-native';
import Button from '../../components/Button';
import styles from './styles';
import Meteor, {MeteorListView, createContainer} from 'react-native-meteor';
import Icon from 'react-native-vector-icons/FontAwesome';
import Telescope from '../../components/components.js';
import InfiniteScrollView from 'react-native-infinite-scroll-view';

let limit = 8;

class Posts extends React.Component {

  constructor(props) {
    super(props);

    console.log('props', props);

    this.handleClick = this.handleClick.bind(this);
  
    this.state = {grid: false, limit: this.props.currentLimit, canLoadMore: true};
  }

  getOptions(){
    return {
      sort: {postedAt: -1},
      limit: this.props.currentLimit,
    }
  }

  handleLoadMoreAsync(){
    console.log('handleLoadMoreAsync called', this.state.canLoadMore);
    if(this.state.canLoadMore){
      this.props.updateCurrentLimit;
      console.log(this.props.currentLimit)
      this.setState({
        limit: this.props.currentLimit,
        canLoadMore: false
      });

      //this is a hack (not recommended but working for now)
      setTimeout(()=>{
        this.setState({
          canLoadMore: true
        });
      }, 2000);
    }
  }

  render (){
    // let posts = this.props.posts;
    // let postsReady = this.props.postsReady;
    let selector = {};
    let options = {sort: {postedAt: -1}, limit: this.props.currentLimit};
    return (
      <View style={styles.container}>

        <MeteorListView
          renderScrollComponent={props => <InfiniteScrollView {...props} />}
          collection="posts"
          selector={selector}
          options={options}
          renderRow={this.renderItem.bind(this)}
          canLoadMore={this.state.canLoadMore}
          onLoadMoreAsync={this.handleLoadMoreAsync.bind(this)}
        />
      </View>
    )
  }

  fetchMoreData(){
    console.log('fetchMoreData called');
    this.setState({limit: this.state.limit+8});
  }

  handleClick(e, item){
    console.log(item,item._id);
    this.props.onDetailsPress(item);
  }

  renderHeader(){
    const myIcon = (<Icon name="rocket" size={30} color="#900" />)
    return (
      <View style={styles.header}>
        <TouchableOpacity onPress={()=> this.changeLayout()} >{myIcon}</TouchableOpacity>
      </View>
    );
  }

  renderCategories(item) {
    return item.categories ? <Telescope.components.PostsCategories post={item} /> : null;
  }

  renderItem(item, sectionID, rowID) {
    let imageUrl = item.thumbnailUrl.indexOf('https') == -1 ? item.thumbnailUrl.replace('http', 'https') : item.thumbnailUrl;

    // console.log(item.upvoters, this.props.user._id);
    const myIcon = item.upvoters.indexOf(this.props.user._id) == -1 ? (<Icon name="thumbs-up" size={30} color="#bbb" />) : (<Icon name="thumbs-up" size={30} color="#0275d8" />)

    console.log(item._id, this.props.user._id);

    return (
      <TouchableHighlight onPress={() => {
          this.handleClick(rowID, item);
        }}>
          <View style={styles.row}>
            <Image style={styles.thumb} source={{uri: imageUrl}} />
            <View style={styles.titleRow}>
              <Text style={styles.title}>{item.title}</Text>
              {this.renderCategories(item, styles.postCategoryStyle)}
            </View>
            <TouchableOpacity style={styles.likeButton} onPress={()=> Meteor.call('posts.checkAndUpvote', item._id, this.props.user._id)} >{myIcon}</TouchableOpacity>
          </View>
      </TouchableHighlight>
    );
  }

};

Posts.propTypes = {
  onDetailsPress: React.PropTypes.func,
  navigator: React.PropTypes.object,
  currentLimit: React.PropTypes.number,
  updateCurrentLimit: React.PropTypes.func,
};

export default createContainer((params) => {
  console.log(params);
  let handleCatgories = Meteor.subscribe('categories');
  let categories = Meteor.collection('categories').find({});


  let selector = {};
  let options = {limit: params.currentLimit, sort: {postedAt: -1}};
  let terms = {selector, options};
  let handle = Meteor.subscribe('posts.list', terms);
  return {
    navigator: params.navigator,
    postsReady: handle.ready(),
    user: Meteor.user(),
  };
}, Posts);

// export default Posts;
