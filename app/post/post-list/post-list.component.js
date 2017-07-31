(function() {

  angular
    .module('reddit')
    .component('postList', {
      controller: 'PostListController',
      templateUrl: 'app/post/post-list/post-list.html'
    });

}());
