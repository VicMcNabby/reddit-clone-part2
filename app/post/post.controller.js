(function() {

  angular
    .module('reddit')
    .controller('PostController', PostController);

  function PostController() {
    console.log('hello from posts');
    const vm = this;

  }
})();
