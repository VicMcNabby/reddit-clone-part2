(function() {

  angular
    .module('reddit')
    .component('postForm', {
      controller: 'PostFormController',
      templateUrl: 'app/post-form/post-form.html'
    });

}());
