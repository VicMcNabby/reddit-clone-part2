(function() {

  angular
    .module('reddit')
    .controller('CommentListController', CommentListController);

  function CommentListController(CommentFactory) {

    const vm = this;

    vm.addComment = addComment
    vm.factory = CommentFactory

      console.log('hello from comment-list');

      vm.comments = []

      function addComment(comment) {
        CommentFactory.addComment(comment)
      }

  }
})();
