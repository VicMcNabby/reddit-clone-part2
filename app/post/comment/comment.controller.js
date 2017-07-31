(function() {

  angular
    .module('reddit')
    .controller('CommentController', CommentController);

  function CommentController(CommentFactory) {
    console.log('hello from comments');
    const vm = this;
    
    vm.addComment = function(comment) {
      vm.AddComment(comment)
    }
  }
})();
