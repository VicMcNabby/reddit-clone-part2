(function() {

  angular
    .module('reddit')
    .component('post', {
      controller: 'PostController',
      templateUrl: 'app/post/post.html',
      bindings: {
        data: '<'
      }
    });

}());
