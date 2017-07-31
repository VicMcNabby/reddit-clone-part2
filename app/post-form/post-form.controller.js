(function() {

  angular
    .module('reddit')
    .controller('PostFormController', PostFormController);

  function PostFormController() {
    console.log('hello from post form');
    const vm = this;

  }
})();
