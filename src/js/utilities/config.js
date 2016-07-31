function config ($stateProvider, $urlRouterProvider) {

  $stateProvider
  .state('root', {
    abstract: true,
    templateUrl: 'templates/root.templ.html',
    // controller: 'RootController as vm'
  })

  .state('root.home', {
    url: '/',
    templateUrl:'templates/home.templ.html',
    controller: 'HomeController as vm'
  })

  .state('root.nexus5',{
    url: '/nexus5',
    templateUrl: 'templates/nexus5.templ.html',
    controller: 'Nexus5Controller as vm'
  })

  $urlRouterProvider.otherwise('/');

}


config.$inject = ['$stateProvider', '$urlRouterProvider'];
export { config };
