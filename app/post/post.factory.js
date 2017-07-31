(function() {

  angular
    .module('reddit')
    .factory('RedditFactory', RedditFactory);

    function RedditFactory() {
      const posts = []

      return {

        addPost(post){
          posts.push(post)
        },

        editPost(post){
          //patch code to edit a post
        }
      };
    }

}());
