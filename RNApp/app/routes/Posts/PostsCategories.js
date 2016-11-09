import React from 'react';
import { Text, View } from 'react-native';
import Meteor from 'react-native-meteor';
import styles from './styles.js';

const PostsCategories = ({post, viewStyle}) => {
	let categoriesArray = Meteor.collection('categories').find({_id: {$in : post.categories}});
  return (
    <View style={viewStyle}>
      {categoriesArray.map(category => 
        <Text key={category._id} style={styles.postsCategories}>{category.name}</Text>
      )}
    </View>
  )
};	

PostsCategories.displayName = "PostsCategories";

module.exports = PostsCategories;