import React from 'react';
import Home from './Home';
import Routes from '../../config/routes';
import Meteor, { createContainer } from 'react-native-meteor';

const HomeContainer = (props) => {
  return (
    <Home navigator={props.navigator} 
      onDetailsPress={() => props.navigator.push(Routes.getDetailsRoute())}
    />
  );
};

HomeContainer.propTypes = {
  navigator: React.PropTypes.object,
};

export default createContainer((params) => {
	Meteor.subscribe('users.current');

  return {
  	navigator: params.navigator,
  	user: Meteor.user(),
  };
}, HomeContainer);
