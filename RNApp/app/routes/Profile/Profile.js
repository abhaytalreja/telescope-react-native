import React from 'react';
import { Text, View, Image } from 'react-native';
import Button from '../../components/Button';
import Avatar from '../../components/Avatar';
import images from '../../config/images';
import { capitalize } from '../../lib/string';
import styles from './styles';
import PostsHome from '../Posts/PostsHome';
var _ = require('underscore');

const Profile = (props) => {
  const { user, signOut } = props;
  let email;

  var postsIds = _.pluck(user.telescope.upvotedPosts, "itemId");
  const selector = {_id: {$in: postsIds}, userId: {$ne: user._id}};
  
  console.log(selector);

  if (user) {
    email = user.emails[0].address;
  }

  return (
    <View style={styles.container}>
      <Image style={styles.header} source={images.profileHeader} />
      <View style={styles.body}>
        <Avatar email={email} />
        <Text>{capitalize(email)}</Text>
        <Button text="Sign Out" onPress={signOut} />
      </View>
      <Text style={styles.headerText}>Posts you Liked!</Text>
      <PostsHome navigator={props.navigator} selector={selector}/>
    </View>
  );
};

Profile.propTypes = {
  user: React.PropTypes.object,
  signOut: React.PropTypes.func,
};

export default Profile;
