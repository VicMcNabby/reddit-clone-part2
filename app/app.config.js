(function() {

  angular
    .module('reddit')
    .config(config)

    function config($stateProvider, $locationProvider, $urlServiceProvider) {
      $locationProvider.html5Mode(true)

      $stateProvider
        .state('home', {
          url: '/posts',
          component: 'postList'
        }).state('postform', {
          url: '/post-form',
          component: 'postForm'
        })

        $urlServiceProvider.rules.otherwise({state: 'home'})
    }

}());
