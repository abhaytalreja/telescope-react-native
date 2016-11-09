import React from 'react';
import Posts from './Posts';
import Routes from '../../config/routes';
import Meteor, { createContainer } from 'react-native-meteor';

let limit = 8;
let currentLimit = 8;

// const PostsContainer = (props) => {
class PostsContainer extends React.Component {	
	constructor(props) {
	  super(props);

	  console.log(props);
	
	  this.state = {currentLimit: currentLimit};
	}
	// console.log(props);
	render(){
		return (
	    <Posts navigator={this.props.navigator} user={this.props.user} updateCurrentLimit={() => this.updateCurrentLimit()}
	      currentLimit={this.state.currentLimit} onDetailsPress={(item) => this.props.navigator.push(Routes.getPostsDetailsRoute(item))}
	    />
	  );
	}

  updateCurrentLimit() {
  	console.log('updateCurrentLimit called');
  	currentLimit+=limit;
  	console.log(currentLimit);
  	this.setState({currentLimit: currentLimit});
  }
}

PostsContainer.propTypes = {
  navigator: React.PropTypes.object,
  postsReady: React.PropTypes.bool,
  user: React.PropTypes.object,
};

export default createContainer((params, currentLimit) => {
	console.log(params, currentLimit);
	let handleCatgories = Meteor.subscribe('categories');
	let categories = Meteor.collection('categories').find({});
	// console.log(categories);


	let selector = {};
	let options = {limit: currentLimit, sort: {postedAt: -1}};
	let terms = {selector, options};
	let handle = Meteor.subscribe('posts.list', terms);
  return {
  	navigator: params.navigator,
  	postsReady: handle.ready(),
  	user: Meteor.user(),
  };
}, PostsContainer);


// export default PostsContainer;
// module.exports = PostsContainer;
