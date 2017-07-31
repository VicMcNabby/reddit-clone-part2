(function() {

  angular
    .module('reddit')
    .component('comment', {
      controller: 'CommentController',
      templateUrl: 'app/post/comment/comment.html',
      bindings: {
        data: '='
      }
    })
})()
