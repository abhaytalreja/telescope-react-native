import React from 'react';
import { Text, View } from 'react-native';
import Meteor from 'react-native-meteor';
import styles from './styles.js';

import Avatar from '../../components/Avatar';
var TimeAgo = require('react-native-timeago');

const PostsUserInfo = ({post}) => {
	return (
		<View style={styles.detailRow}>
      <Avatar email={post.userId} size="small"/>
      <Text style={styles.userInfo}>{post.author}</Text>
      <TimeAgo time={post.postedAt} style={styles.timeAgo}/>
    </View>
	);
};	

PostsUserInfo.displayName = "PostsUserInfo";

module.exports = PostsUserInfo;