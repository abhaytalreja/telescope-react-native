import React, { PropTypes } from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import { MeteorListView } from 'react-native-meteor';
import Loading from '../../components/Loading';
import styles from './styles';
import Telescope from '../../components/components.js';
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors } from '../../config/styles';

// const PostsDetails = ({ detailsReady, this.props.item }) => {
class PostsDetails extends React.Component {
  renderCategories(item) {
    return item.categories ? <Telescope.components.PostsCategories post={item} /> : null;
  }

  render(){

    if (!this.props.detailsReady) {
      return <Loading />;
    }

    console.log(this.props.item.body);

    const myIcon = this.props.item.upvoters.indexOf(this.props.user._id) == -1 ? (<Icon name="thumbs-up" size={30} color="#bbb" />) : (<Icon name="thumbs-up" size={30} color={colors.themeColor} />)

    return (
      <View style={styles.container}>
        <View style={styles.column}>
          <Image style={styles.imageFull} source={{uri: this.props.item.thumbnailUrl}} />
          <View style={styles.titleRow}>
            <TouchableOpacity style={styles.likeButton} onPress={()=> Meteor.call('posts.checkAndUpvote', this.props.item._id, this.props.user._id)} >{myIcon}</TouchableOpacity>
            <View style={styles.titleRowDetails}>
              <Text style={styles.title}>{this.props.item.title}</Text>
              {this.renderCategories(this.props.item, styles.postCategoryStyle)}
              <Telescope.components.PostsUserInfo post={this.props.item} />
            </View>
          </View>
          <View style={styles.bodyRow}>
            <Text style={styles.body}>{this.props.item.body}</Text>
          </View>
        </View>
      </View>
    );
  }
};

PostsDetails.propTypes = {
  detailsReady: PropTypes.bool,
  item: PropTypes.object,
};

export default PostsDetails;
