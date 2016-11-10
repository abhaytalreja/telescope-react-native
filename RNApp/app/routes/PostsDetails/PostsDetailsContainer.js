import React, { PropTypes } from 'react';
import Meteor, { createContainer } from 'react-native-meteor';
import PostsDetails from './PostsDetails';

const PostsDetailsContainer = ({ detailsReady, item, user }) => {
  return (
    <PostsDetails item={item} user={user}
      detailsReady={detailsReady}
    />
  );
};

PostsDetailsContainer.propTypes = {
  detailsReady: PropTypes.bool,
  item: PropTypes.object,
};

export default createContainer((params) => {
  // console.log(params);
  let selector = {_id: params.item._id, slug: params.item._slug};
  // let options = {};
  // let terms = {selector};
  const handle = Meteor.subscribe('posts.single', selector);
  const itemFetched = Meteor.collection('posts').findOne({_id: params.item._id});
  return {
    detailsReady: true,
    user: Meteor.user(),
    item: itemFetched,
  };
}, PostsDetailsContainer);
