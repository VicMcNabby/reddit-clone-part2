(function() {
  angular
    .module('reddit')
    .controller('NavbarController', NavbarController)

  function NavbarController() {
    const vm = this
    console.log('hello from navbar');
  }
}());
