(function() {

  angular
    .module('reddit')
    .factory('CommentFactory', CommentFactory)

    function CommentFactory() {
      const comments = []

      return {
        addComment(comment) {
          comments.push(comment)
        }
      }
    }
}());
