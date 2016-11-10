import React from 'react';
import { Image } from 'react-native';
import gravatar from 'gravatar-api';
import images from '../../config/images';
import styles from './styles';

const Avatar = (props) => {
  let gravatarOptions = {
    email: props.email,
    parameters: { size: 200 },
  };

  // console.log(props.size, "size is");
  if(props.size === 'small'){
    // console.log("reducing size");
    gravatarOptions.parameters.size = 30
  }
  // console.log(gravatarOptions);

  const uri = gravatar.imageUrl(gravatarOptions);
  return (
    <Image
      style={styles.smallAvatar}
      source={{ uri }}
      defaultSource={images.avatarPlaceholder}
    />
  );
};

Avatar.propTypes = {
  email: React.PropTypes.string,
  size: React.PropTypes.string,
};

export default Avatar;
