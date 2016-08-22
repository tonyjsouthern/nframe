function config ($stateProvider, $urlRouterProvider) {

  $stateProvider
  .state('root', {
    abstract: true,
    templateUrl: 'templates/root.templ.html',
    controller: 'RootController as vm'
  })

  .state('root.home', {
    url: '/',
    templateUrl: 'templates/home.templ.html',
    controller: 'HomeController as vm'
  })

  .state('root.singleView', {
    url: '/singleview/:id',
    templateUrl: 'templates/singleView.templ.html',
    controller: 'SingleView as vm'
  })

  .state('root.deviceList', {
    url: '/devicelist',
    templateUrl: 'templates/devicelist.templ.html',
    controller: 'DeviceController as vm'
  })

  .state('root.login', {
    url: '/login',
    templateUrl: 'templates/login.templ.html',
    controller: 'LoginController as vm'
  })

  .state('root.frames', {
    url: '/myframes',
    templateUrl: '/templates/frames.templ.html',
    controller: 'FrameController as vm'
  })

  $urlRouterProvider.otherwise('/');

}

config.$inject = ['$stateProvider', '$urlRouterProvider',];
export { config };
