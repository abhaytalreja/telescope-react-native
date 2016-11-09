/**
 * @summary Kick off the global namespace for Telescope.
 * @namespace Telescope
 */

Telescope = {};

// ------------------------------------- Components -------------------------------- //

Telescope.components = {};

Telescope.registerComponent = (name, component) => {
  Telescope.components[name] = component;
};

Telescope.getComponent = (name) => {
  return Telescope.components[name];
};

Telescope.registerComponent("PostsCategories",      require('../routes/Posts/PostsCategories.js'));
Telescope.registerComponent("Posts",      require('../routes/Posts/Posts.js'));
Telescope.registerComponent("PostsContainer",      require('../routes/Posts/PostsContainer.js'));

export default Telescope;